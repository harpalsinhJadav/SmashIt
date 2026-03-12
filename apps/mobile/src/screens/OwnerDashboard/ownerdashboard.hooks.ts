import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useOwnerDashboardStats } from '../../services/ownerQueries';
import { useTheme } from '../../theme';

export const useOwnerDashboard = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const { data, isLoading, refetch } = useOwnerDashboardStats() as {
    data: any;
    isLoading: boolean;
    refetch: () => void;
  };

  const handleNotifications = useCallback(() => {
    navigation.navigate('Notifications');
  }, [navigation]);

  const handleAddNewCourt = useCallback(() => {
    navigation.navigate('OwnerAddCourt');
  }, [navigation]);

  const handleViewSales = useCallback(() => {
    navigation.navigate('OwnerSales');
  }, [navigation]);

  const handleViewAllCourts = useCallback(() => {
    navigation.navigate('OwnerCourts');
  }, [navigation]);

  const handleCourtPress = useCallback(
    (id: number) => {
      navigation.navigate('OwnerCourtManagement', { id });
    },
    [navigation],
  );

  return {
    t,
    colors,
    isLoading,
    data,
    handleNotifications,
    handleAddNewCourt,
    handleViewSales,
    handleViewAllCourts,
    handleCourtPress,
    refetch,
  };
};
