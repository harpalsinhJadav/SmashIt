import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme';
import { useDispatch } from 'react-redux';
import { setUser, setRole } from '../../redux/slices/appSlice';

export const useOwnerProfileScreen = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const handleNotifications = useCallback(() => {
        navigation.navigate('Notifications');
    }, [navigation]);

    const handleLogout = useCallback(() => {
        dispatch(setUser(null));
        dispatch(setRole(null));
        // Authentication flow should automatically redirect to Login due to RootNavigator structure
    }, [dispatch]);

    const handleEditLocation = useCallback(() => {
        console.log('Edit location tapped');
    }, []);

    const handleDeleteAccount = useCallback(() => {
        console.log('Delete account tapped');
    }, []);

    return {
        t,
        colors,
        handleNotifications,
        handleLogout,
        handleEditLocation,
        handleDeleteAccount,
    };
};
