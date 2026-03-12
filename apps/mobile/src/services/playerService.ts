import apiClient from './apiClient';

const mapCourt = (c: any) => ({
  id: c.id,
  name: c.name,
  location: c.location,
  game: c.type || 'Sport',
  price: `₹${c.pricePerHour || 0}/hr`,
  image: c.mainImage || 'https://via.placeholder.com/300',
  rating: 4.5,
  available: true,
  facilities: c.facilities || [],
  inclusions: ['Sanitized Court', 'First Aid Kit', 'Drinking Water'], // Placeholders if not in DB
  exclusions: ['Equipment Rental', 'Coaching Fees', 'Power Backup (Post 10 PM)'], // Placeholders
  reviews: c.reviews?.length || 0,
  timeSlots: (c.slots || []).map((s: any) => ({
    time: s.startTime,
    available: s.isAvailable,
    popular: Math.random() > 0.7, // Randomly mark some as popular
  })),
});


const mapBooking = (b: any) => ({
  id: b.id,
  bookingId: b.id.toString().slice(-8).toUpperCase(), // Short visible ID
  courtName: b.court?.name || 'Unknown',
  game: b.court?.type || 'Sport',
  location: b.court?.location || 'Location not available',
  date: new Date(b.bookingDate).toLocaleDateString(),
  time: b.startTime,
  amount: `₹${b.totalAmount || 0}`,
  paymentMethod: 'UPI / Card', // Default placeholder
  transactionId: `TXN${Math.floor(Math.random() * 1000000)}`, // Placeholder
  status:
    b.status.toLowerCase() === 'pending'
      ? 'upcoming'
      : b.status.toLowerCase() === 'confirmed'
      ? 'upcoming'
      : b.status.toLowerCase() === 'cancelled'
      ? 'cancelled'
      : 'completed',
});


const mapNotification = (n: any) => ({
  id: n.id,
  title: n.title,
  message: n.message,
  time: new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  read: n.isRead,
  type: n.type || 'info', // Map to types expected by NotificationCard
});

export const playerService = {
  getDashboardData: async () => {
    // This could be multiple calls or a single aggregated endpoint
    const [courts, bookings]: any = await Promise.all([
      apiClient.get('/courts', { params: { limit: 5 } }),
      apiClient.get('/bookings/my'),
    ]);

    return {
      popularCourts: (courts || []).map(mapCourt),
      upcomingBookings: (bookings || [])
        .filter((b: any) => b.status === 'PENDING' || b.status === 'CONFIRMED')
        .map(mapBooking),
    };
  },
  getCourts: async (params: { game?: string; search?: string }) => {
    const data: any = await apiClient.get('/courts', { params });
    return (data || []).map(mapCourt);
  },
  getCourtById: async (id: number) => {
    const data: any = await apiClient.get(`/courts/${id}`);
    return data ? mapCourt(data) : null;
  },
  getBookingHistory: async (filter: string = 'all') => {
    const data: any = await apiClient.get('/bookings/my', {
      params: { status: filter },
    });
    return (data || []).map(mapBooking);
  },
  getBookingDetail: async (id: number) => {
    const data: any = await apiClient.get(`/bookings/${id}`);
    return data ? mapBooking(data) : null;
  },
  getNotifications: async () => {
    const data: any = await apiClient.get('/notifications');
    return (data || []).map(mapNotification);
  },
  getProfile: async () => {
    return apiClient.get('/auth/me');
  },
  createBooking: async (bookingData: any) => {
    return apiClient.post('/bookings', bookingData);
  },
};




