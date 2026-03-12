import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import {
  setBookingHistory,
  setNotifications,
  setPopularCourts,
  setUpcomingBookings,
} from '../redux/slices/playerSlice';
import { useAppDispatch } from '../redux/store';
import { playerService } from './playerService';

export const usePlayerDashboard = () => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: ['playerDashboard'],
    queryFn: playerService.getDashboardData,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setPopularCourts(query.data.popularCourts));
      dispatch(setUpcomingBookings(query.data.upcomingBookings));
    }
  }, [query.data, dispatch]);

  return query;
};

export const useCourts = (params: { game?: string; search?: string }) => {
  return useQuery({
    queryKey: ['courts', params],
    queryFn: () => playerService.getCourts(params),
  });
};

export const useCourtById = (id: number) => {
  return useQuery({
    queryKey: ['court', id],
    queryFn: () => playerService.getCourtById(id),
    enabled: !!id,
  });
};
export const useBookingHistory = (filter: string = 'all') => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ['bookingHistory', filter],
    queryFn: async () => {
      const data = await playerService.getBookingHistory(filter);
      dispatch(setBookingHistory(data));
      return data;
    },
  });
};

export const useBookingDetail = (id: number) => {
  return useQuery({
    queryKey: ['bookingDetail', id],
    queryFn: () => playerService.getBookingDetail(id),
    enabled: !!id,
  });
};
export const useNotifications = () => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const data = await playerService.getNotifications();
      dispatch(setNotifications(data));
      return data;
    },
  });
};

export const usePlayerProfile = () => {
  return useQuery({
    queryKey: ['playerProfile'],
    queryFn: playerService.getProfile,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => playerService.createBooking(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookingHistory'] });
      queryClient.invalidateQueries({ queryKey: ['playerDashboard'] });
    },
  });
};

