import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CourtType, Status } from '@smashit/database';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCourtDto, UpdateCourtDto } from './dto/court.dto';

@Injectable()
export class CourtsService {
  constructor(private prisma: PrismaService) {}

  // Public: Get all active courts with optional game filter + search
  async findAll(game?: string, search?: string) {
    return this.prisma.court.findMany({
      where: {
        status: Status.ACTIVE,
        ...(game &&
          game !== 'all' && { type: game.toUpperCase() as CourtType }),
        ...(search && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      include: {
        owner: { include: { user: { select: { name: true, email: true } } } },
        reviews: { select: { rating: true } },
        slots: { where: { isAvailable: true }, take: 5 },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Public: Get a single court by ID with full details
  async findOne(id: string) {
    const court = await this.prisma.court.findUnique({
      where: { id },
      include: {
        owner: {
          include: {
            user: { select: { name: true, email: true, phoneNumber: true } },
          },
        },
        slots: { orderBy: { startTime: 'asc' } },
        reviews: {
          include: { user: { select: { name: true, avatarUrl: true } } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    if (!court) throw new NotFoundException(`Court with ID ${id} not found`);
    return court;
  }

  // Owner: Create a court (linked to their owner profile)
  async create(userId: string, dto: CreateCourtDto) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner)
      throw new ForbiddenException(
        'You need an owner profile to create courts',
      );

    return this.prisma.court.create({
      data: { ...dto, ownerId: owner.id },
    });
  }

  // Owner: Update their own court
  async update(userId: string, courtId: string, dto: UpdateCourtDto) {
    const court = await this.findOne(courtId);
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (court.ownerId !== owner?.id) {
      throw new ForbiddenException('You can only update your own courts');
    }
    return this.prisma.court.update({ where: { id: courtId }, data: dto });
  }

  // Owner: Get all courts belonging to the logged-in owner
  async findByOwner(userId: string) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner) return [];
    return this.prisma.court.findMany({
      where: { ownerId: owner.id },
      include: {
        slots: true,
        reviews: { select: { rating: true } },
        bookings: {
          select: { status: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
  }

  // Admin: Get ALL courts regardless of status
  async findAllAdmin() {
    return this.prisma.court.findMany({
      include: {
        owner: { include: { user: { select: { name: true, email: true } } } },
        reviews: { select: { rating: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
