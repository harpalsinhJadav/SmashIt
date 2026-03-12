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
}
