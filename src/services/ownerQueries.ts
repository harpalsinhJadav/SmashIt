import { useQuery } from '@tanstack/react-query';
import { ownerService } from './ownerService';

export const useOwnerDashboardStats = () => {
    return useQuery({
        queryKey: ['ownerDashboardStats'],
        queryFn: ownerService.getDashboardStats as any
    });
};

export const useOwnerCourts = () => {
    return useQuery({
        queryKey: ['ownerCourts'],
        queryFn: ownerService.getMyCourts as any
    });
};
