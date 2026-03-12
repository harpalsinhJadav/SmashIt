import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../config/env';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('smashit_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url} - Token: ${token.substring(0, 10)}...`);
      } else {
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url} - No token found`);
      }


    } catch (error) {
      console.error('Error fetching token from storage', error);
    }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => {
    console.log(`[API Response] ${response.status} ${response.config.url}`);
    return response.data;
  },
  error => {
    if (error.response) {
      console.error(`[API Error] ${error.response.status} ${error.config.url}:`, error.response.data);
    } else {
      console.error(`[API Error] ${error.message}`);
    }
    return Promise.reject(error);
  },
);


export default apiClient;

