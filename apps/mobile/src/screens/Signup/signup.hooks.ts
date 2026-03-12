import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../theme';
import { UserRole } from '../Login/login.hooks';

export const useSignup = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState<UserRole>('player');

  const handleSignup = useCallback(() => {
    // Simulate signup
    navigation.navigate('Login');
  }, [navigation]);

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
    userType,
    setUserType,
    handleSignup,
    navigateToLogin,
  };
};
