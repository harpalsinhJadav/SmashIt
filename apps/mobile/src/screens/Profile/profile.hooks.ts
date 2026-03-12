import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { setRole, setUser } from '../../redux/slices/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { usePlayerProfile } from '../../services/playerQueries';
import { useTheme } from '../../theme';

export const useProfile = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const { data: profileData, isLoading, refetch } = usePlayerProfile();
  const location = useAppSelector(state => state.player.location);

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem('smashit_token');
    dispatch(setUser(null));
    dispatch(setRole(null));
  }, [dispatch]);


  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleAction = useCallback((action: string) => {
    console.log('Action pressed:', action);
  }, []);

  return {
    t,
    colors,
    user: profileData,
    location,
    isLoading,
    handleLogout,
    handleBack,
    handleAction,
    refetch,
  };
};
