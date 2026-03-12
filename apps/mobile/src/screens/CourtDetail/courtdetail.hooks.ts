import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCourtById } from '../../services/playerQueries';
import { useTheme } from '../../theme';

export const useCourtDetail = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { id } = route.params;
  const { colors } = useTheme();
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { data: court, isLoading, refetch } = useCourtById(id);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSlotSelect = useCallback((slot: string) => {
    setSelectedSlot(slot);
  }, []);

  const handleBooking = useCallback(() => {
    if (selectedSlot) {
      console.log(
        'Proceeding to book slot:',
        selectedSlot,
        'for date:',
        selectedDate,
      );
      // navigation.navigate('BookingConfirmation', { courtId: id, slot: selectedSlot, date: selectedDate });
    }
  }, [selectedSlot, selectedDate]);

  return {
    court,
    isLoading,
    colors,
    t,
    selectedDate,
    setSelectedDate,
    selectedSlot,
    handleSlotSelect,
    handleBooking,
    handleBack,
    refetch,
    showDatePicker,
    setShowDatePicker,
  };
};
