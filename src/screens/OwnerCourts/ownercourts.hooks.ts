import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme';
import { useOwnerCourts } from '../../services/ownerQueries';

export const useOwnerCourtsList = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation<any>();

    const { data: courts = [], isLoading, refetch } = useOwnerCourts() as { data: any[], isLoading: boolean, refetch: () => void };

    const handleNotifications = useCallback(() => {
        navigation.navigate('Notifications');
    }, [navigation]);

    const handleAddNewCourt = useCallback(() => {
        // Navigate to add new court screen
        console.log('Navigate to Add New Court');
    }, []);

    const handleManageCourt = useCallback((id: number) => {
        // Navigate to manage court screen
        console.log('Navigate to Manage Court', id);
    }, []);

    return {
        t,
        colors,
        courts,
        isLoading,
        handleNotifications,
        handleAddNewCourt,
        handleManageCourt,
        refetch,
    };
};
