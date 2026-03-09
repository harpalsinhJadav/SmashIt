import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLoading } from '../../redux/slices/appSlice';

export const useHome = () => {
    const { t } = useTranslation();
    const { colors, toggleTheme, isDark } = useTheme();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.app);

    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const handleAsyncAction = useCallback(async () => {
        dispatch(setLoading(true));
        // Simulate API call
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
        dispatch(setLoading(false));
    }, [dispatch]);

    return {
        t,
        colors,
        toggleTheme,
        isDark,
        count,
        handleIncrement,
        handleAsyncAction,
        isLoading,
    };
};
