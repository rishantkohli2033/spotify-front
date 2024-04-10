import React from 'react';
import Header from './header/Header';

type MainContentProps = {};

const MainContent:React.FC<MainContentProps> = () => {
    
    return (
        <div className='bg-neutral-900 m-2 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
            <Header/>
        </div>
    )
}
export default MainContent;