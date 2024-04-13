import Image from 'next/image';
import React from 'react';

type SidebarBodyItemProps = {
    itemImage: string;
    itemName: string;
    
};

const SidebarBodyItem:React.FC<SidebarBodyItemProps> = ({itemImage, itemName }) => {
    
    return (
        <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
            <div className='relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden'>
                <Image src={itemImage} alt={'pic'} className='object-cover' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className='flex flex-col gap-y-1 overflow-hidden'>
            <p className='text-white truncate'>{itemName.slice(0, 15) + (itemName.length > 15 ? '...' : '')}</p>    
            
            </div>
        </div>
    )
}
export default SidebarBodyItem;