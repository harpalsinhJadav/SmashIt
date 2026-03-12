import apiClient from './apiClient';

export const userService = {
  getProfile: async () => {
    return apiClient.get('/user/profile');
  },
  updateProfile: async (data: any) => {
    return apiClient.put('/user/profile', data);
  },
};
