import React from 'react';
import Header from './header/Header';
import Content from './content/Content';


type MainContentProps = {};

const MainContent:React.FC<MainContentProps> = () => {
    
    return (
        <div className='bg-neutral-900  mt-2 mb-2 rounded-lg  w-full overflow-hidden overflow-y-auto'>
            <Header/>
            <div className='mt-2 mb-7 px-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-2xl font-semibold'>Global Hits</h1>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
                    <Content/>
                </div>
            </div>
            
        </div>
    )
}
export default MainContent;