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
        navigation.navigate('CourtDetail', { id });
    }, [navigation]);

    const handleBookingPress = useCallback((id: number) => {
        navigation.navigate('HistoryDetail', { id });
    }, [navigation]);

    const handleMyBookings = useCallback(() => {
        navigation.navigate('History');
    }, [navigation]);

    const handleViewAllCourts = useCallback(() => {
        navigation.navigate('Booking');
    }, [navigation]);

    const handleBookACourt = useCallback(() => {
        navigation.navigate('Booking');
    }, [navigation]);

    const handleNotifications = useCallback(() => {
        navigation.navigate('Notifications');
    }, [navigation]);

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
        handleMyBookings,
        handleViewAllCourts,
        handleBookACourt,
        handleNotifications,
        refetch,
    };
};
