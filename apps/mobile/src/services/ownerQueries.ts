import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ownerService } from './ownerService';
import { useAppDispatch } from '../redux/store';
import { setDashboardData, setOwnerCourts, setCourtDetail, setSalesData, setOwnerProfile } from '../redux/slices/ownerSlice';
import { useEffect } from 'react';

export const useOwnerDashboardStats = () => {
    const dispatch = useAppDispatch();
    const query = useQuery({
        queryKey: ['ownerDashboardStats'],
        queryFn: ownerService.getDashboardStats as any
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setDashboardData(query.data));
        }
    }, [query.data, dispatch]);

    return query;
};

export const useOwnerCourts = () => {
    const dispatch = useAppDispatch();
    const query = useQuery({
        queryKey: ['ownerCourts'],
        queryFn: ownerService.getMyCourts as any
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setOwnerCourts(query.data as any[]));
        }
    }, [query.data, dispatch]);

    return query;
};

export const useOwnerCourtDetail = (id: number) => {
    const dispatch = useAppDispatch();
    const query = useQuery({
        queryKey: ['ownerCourtDetail', id],
        queryFn: () => ownerService.getOwnerCourtDetail(id) as any,
        enabled: !!id
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setCourtDetail(query.data));
        }
    }, [query.data, dispatch]);

    return query;
};

export const useOwnerSales = (filter: string) => {
    const dispatch = useAppDispatch();
    const query = useQuery({
        queryKey: ['ownerSales', filter],
        queryFn: () => ownerService.getOwnerSales(filter) as any
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setSalesData(query.data));
        }
    }, [query.data, dispatch]);

    return query;
};

export const useOwnerProfileData = () => {
    const dispatch = useAppDispatch();
    const query = useQuery({
        queryKey: ['ownerProfile'],
        queryFn: ownerService.getOwnerProfile as any
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setOwnerProfile(query.data));
        }
    }, [query.data, dispatch]);

    return query;
};

export const useAddOwnerCourt = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => ownerService.addOwnerCourt(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourts'] });
        },
    });
};

export const useUpdateOwnerCourt = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number, data: any }) => ownerService.updateOwnerCourt(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['ownerCourts'] });
        },
    });
};

export const useAddCourtSlot = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ courtId, slot }: { courtId: number, slot: any }) => ownerService.addCourtSlot(courtId, slot),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.courtId] });
        },
    });
};

export const useUpdateCourtSlot = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ courtId, slotId, slot }: { courtId: number, slotId: number, slot: any }) => ownerService.updateCourtSlot(courtId, slotId, slot),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.courtId] });
        },
    });
};

export const useDeleteCourtSlot = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ courtId, slotId }: { courtId: number, slotId: number }) => ownerService.deleteCourtSlot(courtId, slotId),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.courtId] });
        },
    });
};

export const useAddAssistant = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ courtId, assistant }: { courtId: number, assistant: any }) => ownerService.addAssistant(courtId, assistant),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.courtId] });
        },
    });
};

export const useRemoveAssistant = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ courtId, assistantId }: { courtId: number, assistantId: number }) => ownerService.removeAssistant(courtId, assistantId),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['ownerCourtDetail', variables.courtId] });
        },
    });
};

