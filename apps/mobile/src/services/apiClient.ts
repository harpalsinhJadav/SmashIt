import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async config => {
    // Add auth token here if needed
    // const token = await AsyncStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response.data,
  error => {
    // Handle global errors here
    return Promise.reject(error);
  },
);

export default apiClient;
