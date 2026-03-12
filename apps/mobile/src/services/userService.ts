import apiClient from './apiClient';

export const userService = {
  getProfile: async () => {
    return apiClient.get('/auth/me');
  },
  updateProfile: async (data: any) => {
    // Note: Assuming Patch /auth/me or similar for updates
    return apiClient.patch('/auth/me', data);
  },
};

