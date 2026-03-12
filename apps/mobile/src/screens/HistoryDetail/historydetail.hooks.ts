import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBookingDetail } from '../../services/playerQueries';
import { useTheme } from '../../theme';

export const useHistoryDetail = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { id } = route.params;
  const { colors } = useTheme();
  const { t } = useTranslation();

  const { data: booking, isLoading, refetch } = useBookingDetail(id);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleDownloadInvoice = useCallback(() => {
    console.log('Downloading invoice for booking:', id);
  }, [id]);

  const handleBookAgain = useCallback(() => {
    if (booking?.courtId) {
      navigation.navigate('CourtDetail', { id: booking.courtId });
    }
  }, [navigation, booking]);

  return {
    booking,
    isLoading,
    colors,
    t,
    handleBack,
    handleDownloadInvoice,
    handleBookAgain,
    refetch,
  };
};
