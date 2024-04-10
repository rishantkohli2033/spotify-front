import React from 'react';
import Header from './header/Header';

type MainContentProps = {};

const MainContent:React.FC<MainContentProps> = () => {
    
    return (
        <div className='bg-neutral-900 mt-2 mb-2 rounded-lg  w-full overflow-hidden overflow-y-auto'>
            <Header/>
        </div>
    )
}
export default MainContent;