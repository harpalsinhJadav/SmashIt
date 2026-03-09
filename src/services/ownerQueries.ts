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

export const useOwnerCourtDetail = (id: number) => {
    return useQuery({
        queryKey: ['ownerCourtDetail', id],
        queryFn: () => ownerService.getOwnerCourtDetail(id) as any,
        enabled: !!id
    });
};

export const useOwnerSales = (filter: string) => {
    return useQuery({
        queryKey: ['ownerSales', filter],
        queryFn: () => ownerService.getOwnerSales(filter) as any
    });
};
