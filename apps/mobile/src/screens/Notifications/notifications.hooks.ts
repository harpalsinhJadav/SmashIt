import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useNotifications } from '../../services/playerQueries';
import { useTheme } from '../../theme';

export const useNotificationsHook = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const { data: notifications = [], isLoading, refetch } = useNotifications();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNotificationPress = useCallback((id: number) => {
    console.log('Notification pressed:', id);
    // Logic to mark as read or navigate to specific entity
  }, []);

  return {
    colors,
    t,
    notifications,
    isLoading,
    handleBack,
    handleNotificationPress,
    refetch,
  };
};
