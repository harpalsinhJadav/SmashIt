import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { setRole, setUser } from '../../redux/slices/appSlice';
import { useAppDispatch } from '../../redux/store';
import { useTheme } from '../../theme';
import { authService } from '../../services/authService';

export type UserRole = 'player' | 'owner' | 'assistant' | 'admin';
export type LoginMethod = 'email' | 'phone';

export const useLogin = () => {
  const { t } = useTranslation();
  const { colors, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const [userType, setUserType] = useState<UserRole>('player');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    if (!identifier || !password) {
      Alert.alert(t('common.error'), t('common.fillAllFields'));
      return;
    }

    setIsLoading(true);
    try {
      console.log(`[Login] Attempting login for: ${identifier}`);
      const response: any = await authService.login({
        email: identifier,
        password: password,
      });
      
      console.log('[Login] Response received:', JSON.stringify(response));

      // Response structure contains user and token
      if (response && response.user && response.token) {
        const tokenStr = String(response.token);
        console.log('[Login] Token found, saving to AsyncStorage...');
        await AsyncStorage.setItem('smashit_token', tokenStr);
        
        // Success check
        const savedToken = await AsyncStorage.getItem('smashit_token');
        console.log('[Login] Verification - Token in storage:', savedToken ? 'PRESENT' : 'MISSING');

        dispatch(setUser(response.user));
        dispatch(setRole(response.user.role.toLowerCase() as any));
      } else if (response && response.user) {
        console.warn('[Login] User found but NO TOKEN in response. Raw response:', JSON.stringify(response));
        dispatch(setUser(response.user));
        dispatch(setRole(response.user.role.toLowerCase() as any));
      }
 else {
        console.error('[Login] Unexpected response structure:', response);
      }


    } catch (error: any) {
      console.error('Login error:', error);
      Alert.alert(t('common.error'), t('common.invalidCredentials'));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, identifier, password, t, userType]);

  const navigateToSignup = useCallback(() => {
    navigation.navigate('Signup');
  }, [navigation]);

  return {
    t,
    colors,
    isDark,
    userType,
    setUserType,
    loginMethod,
    setLoginMethod,
    identifier,
    setIdentifier,
    password,
    setPassword,
    isLoading,
    handleLogin,
    navigateToSignup,
  };
};

