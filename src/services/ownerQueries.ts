import { useQuery } from '@tanstack/react-query';
import { ownerService } from './ownerService';

export const useOwnerDashboardStats = () => {
    return useQuery({
        queryKey: ['ownerDashboardStats'],
        queryFn: ownerService.getDashboardStats as any
    });
};
