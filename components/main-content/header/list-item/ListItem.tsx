import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

type ListItemProps = {};

const ListItem:React.FC<ListItemProps> = () => {
    
    return (
        <button className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-nuetral-100/20 transition pr-4'>
            <div className='relative min-h-[64px] min-w-[64px]'>
                <Image src={'/liked.png'} alt={'liked'} fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <p className='font-medium truncate py-5'>
                Liked Songs
            </p>
            <div className='absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
                <FaPlay className='text-black'/>
            </div>
        </button>
    )
}
export default ListItem;