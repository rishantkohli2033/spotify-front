import SidebarBodyItem from '@/components/sidebar/sidebar-nav/sidebar-body/sidebar-body-tem/SidebarBodyItem';
import { Slider } from '@/components/ui/slider';
import useHomeSearch from '@/store/useHomeSearch';
import React, { useState } from 'react';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import PlayerSong from './player-song/PlayerSong';

type PlayerContentProps = {

};

const PlayerContent: React.FC<PlayerContentProps> = () => {
    const { player, setPlayer, playerImage, setPlayerImage, playerName, setPlayerName, playerAuthor } = useHomeSearch();
    const [like, setLike] = useState(false);
    const [playButtonClicked, setPlayButtonClicked] = useState(false);
    const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;
    const handleLike = () => {
        setLike(!like);
    }
    const handlePlay = () => {
        setPlayButtonClicked(!playButtonClicked);
    }
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
                <Slider className='absolute bottom-[80px] -right-[2px] -pr-[50px] w-full' defaultValue={[50]} max={100} step={0.2} />
                <div className='flex w-full justify-start'>
                    <div className='flex items-center gap-x-4'>
                        <PlayerSong itemImage={playerImage} itemName={playerName} itemAuthor={playerAuthor} />
                        <div onClick={handleLike} className='cursor-pointer h-10 w-10 mt-4 text-green-500 tborder-white'>
                            {like ? <BiSolidHeart size={22} /> : <BiHeart size={22} color='white' />}
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden col-auto w-full justify-end items-center'>
                    <div className='h-10 w-10 flex items-center justify-center rounded-full bg-white pl-1 cursor-pointer hover:bg-green-500'>
                        {!playButtonClicked ? <BsPlayFill onClick={handlePlay} size={30} className='text-black' /> : <BsPauseFill onClick={handlePlay} size={30} className='text-black mr-1' />}
                    </div>
                </div>

                <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6 '>
                    <AiFillStepBackward size={30} className='text-neutral-400 cursor-pointer hover:text-green-500 transition ' />
                    <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white pl-1 cursor-pointer hover:bg-green-500'>
                        {!playButtonClicked ? <BsPlayFill onClick={handlePlay} size={30} className='text-black' /> : <BsPauseFill onClick={handlePlay} size={30} className='text-black mr-1' />}
                    </div>
                    <AiFillStepForward size={30} className='text-neutral-400 cursor-pointer hover:text-green-500 transition' />

                </div>
                <div className='hidden md:flex w-full justify-end pr-2'>
                    <div className='flex items-center gap-x-2 w-[150px]'>
                        <VolumeIcon className='cursor-pointer' size={34} />
                        <Slider defaultValue={[50]} max={100} step={0.2} />
                    </div>


                </div>

            </div>

        </>
    )
}
export default PlayerContent;