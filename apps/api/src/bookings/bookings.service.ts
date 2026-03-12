import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BookingStatus } from '@smashit/database';

import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/booking.dto';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class BookingsService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  // Player: Create a booking (checks for double-booking)
  async create(userId: string, dto: CreateBookingDto) {
    // Check if this slot is already booked for this date
    const conflict = await this.prisma.booking.findFirst({
      where: {
        courtId: dto.courtId,
        bookingDate: new Date(dto.bookingDate),
        startTime: dto.startTime,
        status: { in: [BookingStatus.CONFIRMED, BookingStatus.PENDING] },
      },
    });

    if (conflict) {
      throw new ConflictException(
        'This slot is already booked for the selected date',
      );
    }

    const booking = await this.prisma.booking.create({
      data: {
        userId,
        courtId: dto.courtId,
        bookingDate: new Date(dto.bookingDate),
        startTime: dto.startTime,
        endTime: dto.endTime,
        totalAmount: dto.totalAmount,
        status: BookingStatus.PENDING,
      },
      include: {
        court: { select: { name: true, location: true } },
        user: { select: { name: true, email: true } },
      },
    });

    // Trigger notification
    await this.notificationsService.create(userId, {
      title: 'Booking Confirmed!',
      message: `Your booking at ${booking.court.name} is confirmed for ${booking.startTime}.`,
      type: 'BOOKING_CONFIRMED',
    });

    return booking;
  }


  // Player: Get their own bookings
  async findByUser(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        court: {
          select: { name: true, location: true, type: true, mainImage: true },
        },
      },
      orderBy: { bookingDate: 'desc' },
    });
  }

  // Get single booking details
  async findOne(userId: string, bookingId: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        court: {
          select: { name: true, location: true, type: true, mainImage: true },
        },
      },
    });

    if (!booking) throw new NotFoundException('Booking not found');

    // Basic security: Check if booking belongs to user
    // (Admin/Owner roles could be added here if needed)
    if (booking.userId !== userId) {
      throw new ForbiddenException('You do not have permission to view this booking');
    }

    return booking;
  }


  // Player: Cancel their own booking
  async cancel(userId: string, bookingId: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
    });
    if (!booking) throw new NotFoundException('Booking not found');
    if (booking.userId !== userId)
      throw new ForbiddenException('You can only cancel your own bookings');
    if (booking.status === BookingStatus.CANCELLED)
      throw new ConflictException('Booking is already cancelled');

    return this.prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.CANCELLED },
    });
  }

  // Owner: Get all bookings for their courts
  async findByOwner(userId: string) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner) return [];

    return this.prisma.booking.findMany({
      where: { court: { ownerId: owner.id } },
      include: {
        court: { select: { name: true } },
        user: { select: { name: true, email: true, phoneNumber: true } },
      },
      orderBy: { bookingDate: 'desc' },
    });
  }

  // Owner: Confirm or reject a booking
  async updateStatus(userId: string, bookingId: string, status: BookingStatus) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { court: { include: { owner: true } } },
    });
    if (!booking) throw new NotFoundException('Booking not found');
    if (booking.court.owner.userId !== userId)
      throw new ForbiddenException('This is not your court');

    return this.prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    });
  }

  // Admin: Get ALL bookings
  async findAll() {
    return this.prisma.booking.findMany({
      include: {
        court: { select: { name: true, location: true } },
        user: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
