import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme';

export const useOwnerAddCourt = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation<any>();

    const [form, setForm] = useState({
        courtName: '',
        location: '',
        gameType: 'Badminton',
        minDuration: '60',
        maxDuration: '120',
        allowDynamic: false,
        facilities: '',
        status: 'active'
    });

    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleChange = useCallback((key: keyof typeof form, value: string | boolean) => {
        setForm(prev => ({ ...prev, [key]: value }));
    }, []);

    const toggleDynamic = useCallback(() => {
        setForm(prev => ({ ...prev, allowDynamic: !prev.allowDynamic }));
    }, []);

    const handleSubmit = useCallback(() => {
        // mock API call
        console.log('Submitting new court:', form);
        navigation.goBack(); // mock success
    }, [form, navigation]);

    return {
        t,
        colors,
        form,
        handleBack,
        handleChange,
        toggleDynamic,
        handleSubmit,
    };
};
