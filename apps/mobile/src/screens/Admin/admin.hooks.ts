import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme';
import { useAppDispatch } from '../../redux/store';
import { setUser, setRole } from '../../redux/slices/appSlice';

export const useAdmin = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        dispatch(setRole(null));
    };

    return {
        t,
        colors,
        handleLogout,
    };
};
