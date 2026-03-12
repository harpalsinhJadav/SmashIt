import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

import { useCreateBooking, useCourtById } from '../../services/playerQueries';
import { useTheme } from '../../theme';

export const useReviewBooking = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { courtId, slot, date, price } = route.params;

  const { data: court } = useCourtById(courtId);
  const createBookingMutation = useCreateBooking();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleConfirm = useCallback(async () => {
    try {
      const result: any = await createBookingMutation.mutateAsync({
        courtId,
        bookingDate: date,
        startTime: slot,
        endTime: slot, // Assume 1 hour for now, should be calculated
        totalAmount: price,
      });

      Alert.alert(
        t('common.success'),
        t('booking.confirmed'),
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('HistoryDetail', { id: result.id });
            },
          },
        ]
      );

    } catch (error) {
      console.error('Booking confirmation error:', error);
      Alert.alert(t('common.error'), t('booking.failed'));
    }
  }, [courtId, date, slot, price, createBookingMutation, navigation, t]);

  return {
    t,
    colors,
    court,
    slot,
    date,
    price,
    isLoading: createBookingMutation.isPending,
    handleConfirm,
    handleBack,
  };
};
