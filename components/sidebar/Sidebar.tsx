import React from 'react';
import SidebarTop from './SidebarTop';
import SidebarNav from './sidebar-nav/SidebarNav';
import SidebarBody from './sidebar-nav/sidebar-body/SidebarBody';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='flex flex-col w-full'>
            <SidebarTop />
            <div className=" p-2 m-2 rounded h-fit bg-neutral-900 float-left">
                <SidebarNav/>
                <SidebarBody/>

            </div>
        </div>

    )
}
export default Sidebar;