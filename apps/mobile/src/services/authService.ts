import apiClient from './apiClient';

export const authService = {
  login: async (credentials: any) => {
    console.log('[authService] Calling /auth/login with:', JSON.stringify(credentials));
    try {
      const response = await apiClient.post('/auth/login', credentials);
      console.log('[authService] /auth/login raw response:', JSON.stringify(response));
      return response;
    } catch (error: any) {
      console.error('[authService] /auth/login error:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  register: async (userData: any) => {
    return apiClient.post('/auth/register', userData);
  },
  logout: async () => {
    // Clear tokens etc from storage
    // This part is usually handled in the Redux slice or a dedicated hook
  },
  getMe: async () => {
    return apiClient.get('/auth/me');
  },
};

