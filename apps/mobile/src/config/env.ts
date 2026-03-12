import { Platform } from 'react-native';
import Config from 'react-native-config';

// Config will read from the .env file
// Fallbacks provided for development safety
const CONFIG = {
  DEV_API_URL: Platform.select({
    android: Config.API_URL_ANDROID || 'http://10.0.2.2:3001/api',
    ios: Config.API_URL_IOS || 'http://localhost:3001/api',
    default: 'http://localhost:3001/api',
  }),
  PROD_API_URL: Config.API_URL_PROD || 'https://api.smashit.com/api',
};

export const API_URL = __DEV__ ? CONFIG.DEV_API_URL : CONFIG.PROD_API_URL;

