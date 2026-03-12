import apiClient from './apiClient';

const mapOwnerCourt = (c: any) => ({
  id: c.id,
  name: c.name,
  location: c.location,
  game: c.type || 'Sport',
  status: (c.status || 'active').toLowerCase(),
  todayBookings: c._count?.bookings || 0,
  revenue: `₹${c.bookings?.reduce((acc: number, b: any) => acc + (b.totalAmount || 0), 0) || 0}`,
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

  getOwnerCourtDetail: async (id: number) => {
    const data: any = await apiClient.get(`/courts/${id}`);
    return data ? mapOwnerCourt(data) : null;
  },


  getOwnerSales: async (filter: string) => {
    // Note: If there's a specific sales endpoint, use it. 
    // Otherwise, this might be handled by stats/owner with the filter.
    return apiClient.get('/stats/owner', { params: { filter } });
  },

  getOwnerProfile: async () => {
    return apiClient.get('/auth/me');
  },

  addOwnerCourt: async (data: any) => {
    return apiClient.post('/courts', data);
  },

  updateOwnerCourt: async (id: number, data: any) => {
    return apiClient.patch(`/courts/${id}`, data);
  },

  addCourtSlot: async (courtId: number, slot: any) => {
    return apiClient.post(`/courts/${courtId}/slots`, slot);
  },

  updateCourtSlot: async (courtId: number, slotId: number, slot: any) => {
    return apiClient.patch(`/courts/${courtId}/slots/${slotId}`, slot);
  },

  deleteCourtSlot: async (courtId: number, slotId: number) => {
    return apiClient.delete(`/courts/${courtId}/slots/${slotId}`);
  },

  addAssistant: async (courtId: number, assistant: any) => {
    return apiClient.post(`/courts/${courtId}/assistants`, assistant);
  },

  removeAssistant: async (courtId: number, assistantId: number) => {
    return apiClient.delete(`/courts/${courtId}/assistants/${assistantId}`);
  },
};

