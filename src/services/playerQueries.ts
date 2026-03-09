import { useQuery } from '@tanstack/react-query';
import { playerService } from './playerService';
import { useAppDispatch } from '../redux/store';
import { setPopularCourts, setUpcomingBookings } from '../redux/slices/playerSlice';
import { useEffect } from 'react';

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
