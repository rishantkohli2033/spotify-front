import React from 'react';
import { Skeleton } from '../ui/skeleton';

type LoadingSkeletonProps = {
    
};

const LoadingSkeleton:React.FC<LoadingSkeletonProps> = () => {
    
    return (
        
        <div className=" group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4  p-3">
            <Skeleton className='h-32 w-28 bg-neutral-800 ' />
            <div className='items-center flex flex-col w-full pt-4 gap-y-1'>
                <Skeleton className=' mt-2 h-2 w-32 bg-neutral-800' />
                <Skeleton className=' mt-2 h-2 w-32 bg-neutral-800' />
            </div>
        </div>

    )
}
export default LoadingSkeleton;