import { useState, useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useBookingHistory } from '../../services/playerQueries';
import { useTheme } from '../../theme';
import { useTranslation } from 'react-i18next';

export const useHistory = () => {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');

    const FILTERS = useMemo(() => ['all', 'upcoming', 'completed', 'cancelled'], []);

    const { data: bookings = [], isLoading, refetch } = useBookingHistory(filter);

    const handleBookingPress = useCallback((id: number) => {
        navigation.navigate('HistoryDetail', { id });
    }, [navigation]);

    const handleDownloadInvoice = useCallback((id: number) => {
        console.log('Downloading invoice for booking:', id);
    }, []);

    const handleFilterChange = useCallback((newFilter: string) => {
        setFilter(newFilter);
    }, []);

    return {
        colors,
        t,
        filter,
        FILTERS,
        bookings,
        isLoading,
        handleBookingPress,
        handleDownloadInvoice,
        handleFilterChange,
        refetch,
    };
};
