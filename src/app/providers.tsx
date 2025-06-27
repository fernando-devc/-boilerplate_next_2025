"use client"

import { Toaster } from 'sonner';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react';
import { ThemeProvider } from '@/contexts/theme-context';

const queryClient = new QueryClient();

interface ProviderProps {
    children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Toaster/>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
};