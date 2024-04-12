import React from 'react';
import { GiBookshelf } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
type SidebarNavProps = {
    
};

const SidebarNav:React.FC<SidebarNavProps> = () => {
    
    return (
    <div className='flex flex-col '>
        <div className='flex items-center'>
        <GiBookshelf fontSize={20}/> &nbsp; Your Library
            <div className='flex flex-grow justify-end'>
                +&nbsp;&nbsp;&nbsp;{'->'}
            </div>
        </div>
        {/* comment */}
        <div className='flex text-sm m-2 sm:ml-2 md:ml-4 
        pb-2 overflow-x-auto max-w-72 h-auto
         space-x-2 pt-2 transition rounded-2xl'>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Playlists   
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Artists
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Albums
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Podcasts    
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Trending
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Recent
            </Button>
            <Button variant={'ghost'} className='bg-transparent rounded-full p-2'>
                Latest
            </Button>
            
        </div>
        <div className='flex p-2'>
        <BiSearchAlt2/>
            <div className='flex flex-grow justify-end text-sm items-center'>
                Recent&nbsp;<TbTriangleInvertedFilled />
            </div>
        </div>
        
    </div>
)
}
export default SidebarNav;