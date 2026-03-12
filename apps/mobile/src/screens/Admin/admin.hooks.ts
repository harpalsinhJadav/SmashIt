import { useTranslation } from 'react-i18next';

import { setRole, setUser } from '../../redux/slices/appSlice';
import { useAppDispatch } from '../../redux/store';
import { useTheme } from '../../theme';

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
