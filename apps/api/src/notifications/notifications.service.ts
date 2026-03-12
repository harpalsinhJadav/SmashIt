import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async findAll(userId: string) {
    // Basic mock notifications for now
    return [
      {
        id: '1',
        title: 'New Booking Confirmed',
        message: 'Your booking at Smash Court has been confirmed.',
        type: 'BOOKING_CONFIRMED',
        isRead: false,
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Welcome to SmashIT',
        message: 'Start booking your favorite courts today!',
        type: 'WELCOME',
        isRead: true,
        createdAt: new Date(Date.now() - 86400000),
      },
    ];
  }

  async markAsRead(userId: string, id: string) {
    return { success: true };
  }

  async create(userId: string, data: { title: string; message: string; type: string }) {
    console.log(`[Notification Service] Creating notification for user ${userId}:`, data);
    // In a real app, this would save to DB. For now, we return success.
    return { id: Math.random().toString(36).substr(2, 9), ...data, createdAt: new Date() };
  }
}

