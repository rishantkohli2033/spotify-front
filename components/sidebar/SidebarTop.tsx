import Link from 'next/link';
import React from 'react';

type SidebarTopProps = {};

const SidebarTop: React.FC<SidebarTopProps> = () => {

    return (
        <div className="flex flex-col rounded m-2 p-2 h-40 bg-neutral-900 float-left">
            <a href='/'>Home</a>
            <input type="text" className='rounded bg-gray-500'/>
        </div>
    )
}
export default SidebarTop;