import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatsService {
  constructor(private prisma: PrismaService) {}

  async getAdminStats() {
    const [userCount, courtCount, bookingCount, totalRevenue, bookingsByType] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.court.count(),
        this.prisma.booking.count(),
        this.prisma.booking.aggregate({
          _sum: { totalAmount: true },
          where: { status: 'COMPLETED' },
        }),
        this.prisma.court.groupBy({
          by: ['type'],
          _count: { _all: true },
        }),
      ]);

    const recentBookings = await this.prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { name: true } },
        court: { select: { name: true } },
      },
    });

    return {
      summary: {
        users: userCount,
        courts: courtCount,
        bookings: bookingCount,
        revenue: totalRevenue._sum.totalAmount || 0,
      },
      chartData: bookingsByType.map((item) => ({
        name: item.type,
        value: item._count._all,
      })),
      recentBookings,
    };
  }

  async getOwnerStats(ownerId: string) {
    const ownerCourts = await this.prisma.court.findMany({
      where: { ownerId },
      select: { id: true, name: true, status: true },
    });

    const courtIds = ownerCourts.map((c) => c.id);

    const [bookingCount, revenueData, uniquePlayers] = await Promise.all([
      this.prisma.booking.count({
        where: { courtId: { in: courtIds } },
      }),
      this.prisma.booking.aggregate({
        _sum: { totalAmount: true },
        where: {
          courtId: { in: courtIds },
          status: 'COMPLETED',
        },
      }),
      this.prisma.booking.groupBy({
        by: ['userId'],
        where: { courtId: { in: courtIds } },
      }),
    ]);

    const recentBookings = await this.prisma.booking.findMany({
      where: { courtId: { in: courtIds } },
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { name: true } },
        court: { select: { name: true } },
      },
    });

    return {
      stats: [
        {
          id: 'bookings',
          label: 'totalBookings',
          value: bookingCount.toString(),
          change: '+0%', // Placeholder, real change calculation requires historical data
          color: 'blue',
        },
        {
          id: 'revenue',
          label: 'revenue',
          value: `₹${revenueData._sum.totalAmount || 0}`,
          change: '+0%',
          color: 'green',
        },
        {
          id: 'players',
          label: 'activePlayers',
          value: uniquePlayers.length.toString(),
          change: '+0%',
          color: 'purple',
        },
      ],
      recentBookings: recentBookings.map((b) => ({
        id: b.id,
        court: b.court.name,
        player: b.user.name,
        time: b.startTime.toLocaleString(),
        amount: `₹${b.totalAmount}`,
      })),
      myCourts: ownerCourts.map((c) => ({
        id: c.id,
        name: c.name,
        status: c.status.toLowerCase(),
        bookings: 0, // Would need another count per court
      })),
    };
  }
}

