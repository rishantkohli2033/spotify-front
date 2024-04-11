import React from 'react';
import Header from './header/Header';

type MainContentProps = {};

const MainContent:React.FC<MainContentProps> = () => {
    
    return (
        <div className='bg-neutral-900 mt-2 mb-2 rounded-lg  w-full overflow-hidden overflow-y-auto'>
            <Header/>
            <div className='mt-2 mb-7 px-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-2xl font-semibold'>Newest Songs</h1>
                </div>
                <div>
                List of Songs!!
                </div>
            </div>
            
        </div>
    )
}
export default MainContent;