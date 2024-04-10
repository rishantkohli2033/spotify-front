import React from 'react';
import { GiBookshelf } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbTriangleInvertedFilled } from 'react-icons/tb';
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
        <div className='flex text-sm m-2 sm:ml-2 md:ml-4 lg:ml-40
        pb-2 overflow-x-auto max-w-72 h-auto
         space-x-2 pt-2'>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Playlists   
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Artists
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Albums
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Podcasts    
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Trending
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Recent
            </div>
            <div className='bg-neutral-800 rounded-2xl p-2'>
                Latest
            </div>
            
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