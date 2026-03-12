import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { setRole, setUser } from '../../redux/slices/appSlice';
import { useAppDispatch } from '../../redux/store';
import { useOwnerProfileData } from '../../services/ownerQueries';
import { useTheme } from '../../theme';

export const useOwnerProfileScreen = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const {
    data: profileData,
    isLoading,
    refetch,
  } = useOwnerProfileData() as {
    data: any;
    isLoading: boolean;
    refetch: () => void;
  };

  const handleNotifications = useCallback(() => {
    navigation.navigate('Notifications');
  }, [navigation]);

  const handleLogout = useCallback(() => {
    dispatch(setUser(null));
    dispatch(setRole(null));
  }, [dispatch]);

  const handleEditLocation = useCallback(() => {
    console.log('Edit location tapped');
  }, []);

  const handleDeleteAccount = useCallback(() => {
    console.log('Delete account tapped');
  }, []);

  return {
    t,
    colors,
    profileData,
    isLoading,
    handleNotifications,
    handleLogout,
    handleEditLocation,
    handleDeleteAccount,
    refetch,
  };
};
