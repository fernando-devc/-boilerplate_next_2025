'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const getCount = async (): Promise<number> => {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem('count');
    return stored ? parseInt(stored, 10) : 0;
};

const incrementCount = async (): Promise<number> => {
    if (typeof window === 'undefined') return 0;
    const current = await getCount();
    const newCount = current + 1;
    localStorage.setItem('count', newCount.toString());
    return newCount;
};

export function useCount() {
    return useQuery({
        queryKey: ['count'],
        queryFn: getCount,
        enabled: typeof window !== 'undefined',
    });
}

export function useIncrementCount() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: incrementCount,
        onSuccess: (newCount) => {
            queryClient.setQueryData(['count'], newCount);
        },
    });
}