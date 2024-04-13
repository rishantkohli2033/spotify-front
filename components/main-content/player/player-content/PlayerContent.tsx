import SidebarBodyItem from '@/components/sidebar/sidebar-nav/sidebar-body/sidebar-body-tem/SidebarBodyItem';
import { Slider } from '@/components/ui/slider';
import useHomeSearch from '@/store/useHomeSearch';
import React, { useState } from 'react';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsPlayFill } from 'react-icons/bs';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';

type PlayerContentProps = {
    
};

const PlayerContent:React.FC<PlayerContentProps> = () => {
    const {player, setPlayer, playerImage,setPlayerImage,playerName,setPlayerName, playerAuthor} = useHomeSearch();
    const[like, setLike] = useState(false);
    const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;
    const handleLike = () => {
        setLike(!like);
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
            <div className='flex w-full justify-start'>
                <div className='flex items-center gap-x-4'>
                    <SidebarBodyItem itemImage={playerImage} itemName={playerName} itemAuthor={playerAuthor}/>
                    <div onClick={handleLike} className='cursor-pointer h-10 '>
                    {like ?<BiSolidHeart size={20}/> : <BiHeart  size={20}/>}
                    </div>
                </div>
            </div>
            <div className='flex md:hidden col-auto w-full justify-end items-center'>
                <div className='h-10 w-10 flex items-center justify-center rounded-full bg-white pl-1 cursor-pointer'>
                    <BsPlayFill size={30} className='text-black'/>
                </div>
            </div>

            <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6'>
                <AiFillStepBackward size={30} className='text-neutral-400 cursor-pointer hover:text-white transition' />
                <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white pl-1 cursor-pointer'>
                    <BsPlayFill size={30} className='text-black' />
                </div>
                <AiFillStepForward size={30} className='text-neutral-400 cursor-pointer hover:text-white transition'/>
            </div>
             <div className='hidden md:flex w-full justify-end pr-2'>
                <div className='flex items-center gap-x-2 w-[120px]'>
                    <VolumeIcon className='cursor-pointer' size={34}/>
                    <Slider className='bg-neutral-600 realtive grow rounded-full h-[3px] ' defaultValue={[1]} max={1} step={0.1}/>
                </div>
             </div>
        </div>
    )
}
export default PlayerContent;