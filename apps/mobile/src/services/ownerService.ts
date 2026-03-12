import apiClient from './apiClient';

const mapOwnerCourt = (c: any) => ({
  id: c.id,
  name: c.name,
  location: c.location,
  game: c.type || 'Sport',
  status: (c.status || 'active').toLowerCase(),
  todayBookings: c._count?.bookings || 0,
  revenue: `₹${
    c.bookings?.reduce(
      (acc: number, b: any) => acc + (b.totalAmount || 0),
      0,
    ) || 0
  }`,
  image: c.mainImage || 'https://via.placeholder.com/300',
});

export const ownerService = {
  getDashboardStats: async () => {
    return apiClient.get('/stats/owner');
  },

  getMyCourts: async () => {
    const data: any = await apiClient.get('/courts/owner/my-courts');
    return (data || []).map(mapOwnerCourt);
  },

  getOwnerCourtDetail: async (id: number | string) => {
    const data: any = await apiClient.get(`/courts/${id}`);
    if (!data) return null;

    return {
      ...mapOwnerCourt(data),
      slots: (data.slots || []).map((s: any) => ({
        id: s.id,
        time: `${s.startTime} - ${s.endTime}`,
        price: `₹${s.price || data.pricePerHour}`,
        status: s.isAvailable ? 'available' : 'booked',
      })),
      assistants: data.assistants || [],
      description: data.description || '',
      price: data.pricePerHour || 0,
      facilities: Array.isArray(data.facilities)
        ? data.facilities.join(', ')
        : data.facilities || '',
    };
  },

  getOwnerSales: async (filter: string) => {
    return apiClient.get('/stats/owner/sales', { params: { filter } });
  },

  getOwnerProfile: async () => {
    return apiClient.get('/auth/me');
  },

  addOwnerCourt: async (formData: any) => {
    const data = {
      name: formData.courtName,
      location: formData.location,
      type: formData.gameType.toUpperCase(),
      pricePerHour: parseInt(formData.price || '0', 10),
      facilities: formData.facilities
        ? formData.facilities.split(',').map((s: string) => s.trim())
        : [],
      description: formData.description || '',
      status: 'ACTIVE',
    };
    return apiClient.post('/courts', data);
  },

  updateOwnerCourt: async (id: number | string, formData: any) => {
    const data: any = {};
    if (formData.name) data.name = formData.name;
    if (formData.location) data.location = formData.location;
    if (formData.game) data.type = formData.game.toUpperCase();
    if (formData.price)
      data.pricePerHour = parseInt(formData.price.toString(), 10);
    if (formData.facilities) {
      data.facilities =
        typeof formData.facilities === 'string'
          ? formData.facilities.split(',').map((s: string) => s.trim())
          : formData.facilities;
    }
    if (formData.status) data.status = formData.status.toUpperCase();

    return apiClient.patch(`/courts/${id}`, data);
  },

  addCourtSlot: async (courtId: number | string, slotForm: any) => {
    // Mobile uses "6:00 AM - 7:00 AM", backend needs startTime and endTime
    const times = slotForm.time.split('-').map((s: string) => s.trim());
    const data = {
      startTime: times[0] || '',
      endTime: times[1] || '',
      price: parseFloat(slotForm.price.replace(/[^0-9.]/g, '')) || 0,
      isAvailable: slotForm.status === 'available',
    };
    return apiClient.post(`/courts/${courtId}/slots`, data);
  },

  updateCourtSlot: async (
    courtId: number | string,
    slotId: number | string,
    slotForm: any,
  ) => {
    const times = slotForm.time.split('-').map((s: string) => s.trim());
    const data = {
      startTime: times[0],
      endTime: times[1],
      price: parseFloat(slotForm.price.replace(/[^0-9.]/g, '')) || 0,
      isAvailable: slotForm.status === 'available',
    };
    return apiClient.patch(`/courts/${courtId}/slots/${slotId}`, data);
  },

  deleteCourtSlot: async (
    courtId: number | string,
    slotId: number | string,
  ) => {
    return apiClient.delete(`/courts/${courtId}/slots/${slotId}`);
  },

  updateBookingStatus: async (bookingId: string, status: string) => {
    return apiClient.patch(`/bookings/${bookingId}/status`, { status });
  },
};
