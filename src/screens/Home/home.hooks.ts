import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { usePlayerDashboard } from '../../services/playerQueries';
import { useNavigation } from '@react-navigation/native';

export const useHome = () => {
    const { t } = useTranslation();
    const { colors, isDark } = useTheme();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();

    const { isLoading, refetch } = usePlayerDashboard();

    const popularCourts = useAppSelector((state) => state.player.popularCourts);
    const upcomingBookings = useAppSelector((state) => state.player.upcomingBookings);
    const location = useAppSelector((state) => state.player.location);

    const handleCourtPress = useCallback((id: number) => {
        // navigation.navigate('CourtDetails', { id });
        console.log('Court pressed:', id);
    }, []);

    const handleBookingPress = useCallback((id: number) => {
        // navigation.navigate('BookingDetails', { id });
        console.log('Booking pressed:', id);
    }, []);

    const handleViewAllCourts = useCallback(() => {
        // navigation.navigate('SearchCourts');
        console.log('View all courts');
    }, []);

    return {
        t,
        colors,
        isDark,
        isLoading,
        popularCourts,
        upcomingBookings,
        location,
        handleCourtPress,
        handleBookingPress,
        handleViewAllCourts,
        refetch,
    };
};
