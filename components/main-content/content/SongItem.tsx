"use client"
import useHomeSearch from '@/store/useHomeSearch';
import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

type SongItemProps = {
    songImage: string;
    songName: string;
    songArtist?: string;
    search: boolean;
};

const SongItem:React.FC<SongItemProps> = ({songImage, songName, songArtist,search}) => {
    const {player, setPlayer, setPlayerImage, setPlayerName, setPlayerAuthor, loading} = useHomeSearch();
    const handleClick = () =>{
        setPlayer(!player);
        setPlayerImage(songImage);
        setPlayerName(songName);
        setPlayerAuthor(""); //to reset the global Author state because they might not be available 
        if(songArtist) setPlayerAuthor(songArtist); //if they are availale then they will be set here
    }
    return (
        <>
        { !loading &&(
            <div onClick={handleClick} className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 cursor-pointer hover:bg-neutral-400/10 hover:scale-25 active:bg-black transition p-3 hover:scale-110">
            <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>

                <Image className="object-cover" src={songImage} alt={"Song Cover"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true}/>
            </div>
            <div className='flex flex-col items-start w-full pt-4 gap-y-1'>
                <p className='font-semibold truncate w-full'>
                    {songName}
                </p>
                {songArtist && (<p className='text-neutral-400 text-sm pb-4 w-full truncate'>
                    By {songArtist}
                </p>)}
            </div>
            <div className={`fixed justify-center ${search ? 'bottom-14' : 'bottom-24'} right-4`}>
                <button className='transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadows-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'>
                    <FaPlay className='text-black' />
                </button>
            </div>
        </div>)}


       </>     
    )
}
export default SongItem;