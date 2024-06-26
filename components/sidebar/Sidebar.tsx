import React from 'react';
import SidebarTop from './SidebarTop';
import SidebarNav from './sidebar-nav/SidebarNav';
import SidebarBody from './sidebar-nav/sidebar-body/SidebarBody';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='hidden md:flex flex-col overflow-hidden'>
            <SidebarTop />
            <div className="p-2 mr-2 ml-2 mb-2 rounded-lg h-full bg-neutral-900 overflow-hidden">
                <SidebarNav/>
                <div className="hover:overflow-y-auto overflow-hidden h-full">
                <SidebarBody/>    
                </div>
            </div>
        </div>

    )
}
export default Sidebar;