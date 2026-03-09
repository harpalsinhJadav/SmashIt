import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from './userService';

export const useProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: userService.getProfile,
    });
};

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userService.updateProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        },
    });
};
