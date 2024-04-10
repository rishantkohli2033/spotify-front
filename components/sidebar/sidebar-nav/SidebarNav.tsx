import React from 'react';

type SidebarNavProps = {
    
};

const SidebarNav:React.FC<SidebarNavProps> = () => {
    
    return (
    <div className='flex flex-col'>
        <div className='flex'>
            Your Library
            <div className='flex flex-grow justify-end'>
                +&nbsp;&nbsp;&nbsp;{'->'}
            </div>
        </div>
        {/* comment */}
        <div className='flex text-sm m-2 sm:ml-2 md:ml-4 lg:ml-40 overflow-x-auto max-w-72 h-auto
         space-x-2 pt-2'>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Playlists    
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Artists
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Albums
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Podcasts    
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Trending
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Recent
            </div>
            <div className='bg-gray-500 rounded-2xl p-1'>
                Latest
            </div>
            
        </div>
        <div className='flex'>
            🔍
            <div className='flex flex-grow justify-end text-sm'>
                Recent&nbsp;🔽
            </div>
        </div>
        
    </div>
)
}
export default SidebarNav;