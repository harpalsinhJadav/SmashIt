import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

import { useTheme } from '../../theme';
import { UserRole } from '../Login/login.hooks';
import { authService } from '../../services/authService';

export const useSignup = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserRole>('player');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = useCallback(async () => {
    if (!name || !email || !password) {
      Alert.alert(t('common.error'), t('common.fillAllFields'));
      return;
    }

    setIsLoading(true);
    try {
      await authService.register({
        name,
        email,
        password,
        role: userType.toUpperCase(),
        phoneNumber: phone,
      });
      
      Alert.alert(t('common.success'), t('common.signupSuccess'), [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error: any) {
      console.error('Signup error:', error);
      Alert.alert(t('common.error'), t('common.signupFailed'));
    } finally {
      setIsLoading(false);
    }
  }, [email, name, navigation, password, phone, t, userType]);

  const navigateToLogin = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    t,
    colors,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    userType,
    setUserType,
    isLoading,
    handleSignup,
    navigateToLogin,
  };
};

