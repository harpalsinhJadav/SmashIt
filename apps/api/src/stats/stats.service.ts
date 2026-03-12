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

  async getOwnerStats(userId: string) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner) return { stats: [], recentBookings: [], myCourts: [] };

    const ownerCourts = await this.prisma.court.findMany({
      where: { ownerId: owner.id },
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

    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const myCourts = await Promise.all(
      ownerCourts.map(async (c) => {
        const bookings = await this.prisma.booking.count({
          where: {
            courtId: c.id,
            createdAt: { gte: last30Days },
          },
        });
        return {
          id: c.id,
          name: c.name,
          status: c.status.toLowerCase(),
          bookings,
        };
      }),
    );

    return {
      stats: [
        {
          id: 'bookings',
          label: 'totalBookings',
          value: bookingCount.toString(),
          change: '+12%',
          color: 'blue',
        },
        {
          id: 'revenue',
          label: 'revenue',
          value: `₹${revenueData._sum.totalAmount || 0}`,
          change: '+8%',
          color: 'green',
        },
        {
          id: 'players',
          label: 'activePlayers',
          value: uniquePlayers.length.toString(),
          change: '+5%',
          color: 'purple',
        },
      ],
      recentBookings: recentBookings.map((b) => ({
        id: b.id,
        court: b.court.name,
        player: b.user.name,
        time: `${b.bookingDate.toLocaleDateString()} ${b.startTime}`,
        amount: `₹${b.totalAmount}`,
        status: b.status.toLowerCase(),
      })),
      myCourts,
    };
  }

  async getOwnerSales(userId: string, filter: string) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner)
      return { stats: [], transactions: [], courtWiseSales: [], chartData: [] };

    const ownerCourts = await this.prisma.court.findMany({
      where: { ownerId: owner.id },
      select: { id: true, name: true },
    });
    const courtIds = ownerCourts.map((c) => c.id);

    let dateLimit = new Date(0);
    if (filter === 'weekly') {
      dateLimit = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    } else if (filter === 'monthly') {
      dateLimit = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    }

    const [revenueData, transactions, uniquePlayers] = await Promise.all([
      this.prisma.booking.aggregate({
        _sum: { totalAmount: true },
        where: {
          courtId: { in: courtIds },
          status: 'COMPLETED',
          createdAt: { gte: dateLimit },
        },
      }),
      this.prisma.booking.findMany({
        where: {
          courtId: { in: courtIds },
          createdAt: { gte: dateLimit },
        },
        include: {
          user: { select: { name: true } },
          court: { select: { name: true, id: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.booking.groupBy({
        by: ['userId'],
        where: {
          courtId: { in: courtIds },
          createdAt: { gte: dateLimit },
        },
      }),
    ]);

    const courtBreakdown: Record<
      string,
      { name: string; bookings: number; revenue: number }
    > = {};
    ownerCourts.forEach((c) => {
      courtBreakdown[c.id] = { name: c.name, bookings: 0, revenue: 0 };
    });

    transactions.forEach((t) => {
      if (courtBreakdown[t.courtId]) {
        courtBreakdown[t.courtId].bookings += 1;
        if (t.status === 'COMPLETED') {
          courtBreakdown[t.courtId].revenue += t.totalAmount;
        }
      }
    });

    const totalRevenue = revenueData._sum.totalAmount || 0;

    return {
      stats: [
        {
          label: 'totalRevenue',
          value: `₹${totalRevenue}`,
          color: '#10B981',
        },
        {
          label: 'totalBookings',
          value: transactions.length.toString(),
          color: '#3B82F6',
        },
        {
          label: 'activePlayers',
          value: uniquePlayers.length.toString(),
          color: '#8B5CF6',
        },
        {
          label: 'avgBookingValue',
          value: `₹${
            transactions.length > 0
              ? Math.round(totalRevenue / transactions.length)
              : 0
          }`,
          color: '#F59E0B',
        },
      ],
      transactions: transactions.map((t) => ({
        id: t.id,
        player: t.user.name,
        court: t.court.name,
        date: t.bookingDate,
        amount: `₹${t.totalAmount}`,
        status: t.status.toLowerCase(),
      })),
      courtWiseSales: Object.values(courtBreakdown).map((cb) => ({
        court: cb.name,
        bookings: cb.bookings,
        revenue: `₹${cb.revenue}`,
      })),
      chartData: [
        { name: 'Mon', revenue: 400 },
        { name: 'Tue', revenue: 300 },
        { name: 'Wed', revenue: 600 },
        { name: 'Thu', revenue: 800 },
        { name: 'Fri', revenue: 500 },
        { name: 'Sat', revenue: 900 },
        { name: 'Sun', revenue: 700 },
      ],
    };
  }
}
