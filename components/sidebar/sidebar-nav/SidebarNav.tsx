import React, { useState } from 'react';
import { GiBookshelf } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Menu } from './Menu/Menu';
import { RecentMenu } from './recent-menu/RecentMenu';
type SidebarNavProps = {
    
};

const SidebarNav:React.FC<SidebarNavProps> = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
    <div className='flex flex-col '>
        <div className='flex items-center'>
        <GiBookshelf fontSize={20}/> &nbsp; Your Library
            <div className='flex flex-grow justify-end'>
                <Menu/>
            </div>
        </div>
        {/* comment */}
        <div className='flex text-sm m-2 sm:ml-2 md:ml-4 
        pb-2 hover:overflow-x-auto overflow-hidden max-w-72 h-auto
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
        <div className='flex pl-2 items-center '>
        <BiSearchAlt2 onClick={()=>setSearchOpen(!searchOpen) }className='hover:cursor-pointer hover:opacity-75' size={18}/>

        {searchOpen && (
            <div className='pl-2 pb-1 '>
                <input type='text' className='rounded-full  bg-neutral-700 h-7 w-20 p-2 focus:outline-none text-sm  transition-transform duration-500 translate-x-0' placeholder='Search'/>
            </div>
        )}
            <div className='flex flex-grow justify-end text-sm items-center hover:cursor-pointer '>
                <RecentMenu />
            </div>
        </div>
        
    </div>
)
}
export default SidebarNav;