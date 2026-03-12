import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useOwnerSales } from '../../services/ownerQueries';
import { useTheme } from '../../theme';

export const useOwnerSalesScreen = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const [filter, setFilter] = useState<'weekly' | 'monthly' | 'yearly'>(
    'monthly',
  );

  // Fetch sales data
  const {
    data: salesData,
    isLoading,
    refetch,
  } = useOwnerSales(filter) as {
    data: any;
    isLoading: boolean;
    refetch: () => void;
  };

  const handleNotifications = useCallback(() => {
    navigation.navigate('Notifications');
  }, [navigation]);

  const handleExport = useCallback(() => {
    console.log('Export data');
  }, []);

  return {
    t,
    colors,
    filter,
    setFilter,
    salesData,
    isLoading,
    refetch,
    handleNotifications,
    handleExport,
  };
};
