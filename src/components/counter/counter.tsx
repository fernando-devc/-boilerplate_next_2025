'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useCount, useIncrementCount } from '../../actions/home';

export const Counter: React.FC = () => {
    const { data: count = 0 } = useCount();
    const { mutate: increment } = useIncrementCount();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <Button 
                onClick={() => increment()} 
                variant="default"
                className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-shadow"
                size="icon"
            >
                {count}
            </Button>
        </div>
    );
};

export default Counter;
