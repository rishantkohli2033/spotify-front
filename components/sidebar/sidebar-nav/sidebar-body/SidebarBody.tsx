import React from 'react';
import SidebarBodyItem from './sidebar-body-tem/SidebarBodyItem';

type SidebarBodyProps = {
    
};

const SidebarBody:React.FC<SidebarBodyProps> = () => {
    
    return (
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            <SidebarBodyItem/>
        </div>
    )
}
export default SidebarBody;