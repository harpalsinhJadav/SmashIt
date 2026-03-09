import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme';
import { useAppDispatch } from '../../redux/store';
import { setUser, setRole } from '../../redux/slices/appSlice';
import { useNavigation } from '@react-navigation/native';

export type UserRole = 'player' | 'owner' | 'assistant' | 'admin';
export type LoginMethod = 'email' | 'phone';

export const useLogin = () => {
    const { t } = useTranslation();
    const { colors, isDark } = useTheme();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();

    const [userType, setUserType] = useState<UserRole>('player');
    const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
    const [identifier, setIdentifier] = useState('');

    const handleLogin = useCallback(() => {
        // Simulate login
        dispatch(setUser({ id: '1', name: 'User', role: userType }));
        dispatch(setRole(userType as any));
    }, [dispatch, userType]);

    const navigateToSignup = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);

    return {
        t,
        colors,
        isDark,
        userType,
        setUserType,
        loginMethod,
        setLoginMethod,
        identifier,
        setIdentifier,
        handleLogin,
        navigateToSignup,
    };
};
