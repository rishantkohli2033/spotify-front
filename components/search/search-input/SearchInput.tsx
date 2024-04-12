"use client"
import { Input } from '@/components/ui/input';
import React from 'react';

type SearchInputProps = {
    
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <div className='m-2 px-3 py-3'>
            <Input className='bg-neutral-700 border-transparent text-sm' placeholder='Name of Artist'/>
        </div>
    )
}
export default SearchInput;