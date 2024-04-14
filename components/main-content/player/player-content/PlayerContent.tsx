import { Slider } from '@/components/ui/slider';
import useHomeSearch from '@/store/useHomeSearch';
import React, { useEffect, useState } from 'react';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import PlayerSong from './player-song/PlayerSong';
import { PiSpeakerHighFill, PiSpeakerLowFill, PiSpeakerNoneFill } from 'react-icons/pi';

type PlayerContentProps = {

};

const PlayerContent: React.FC<PlayerContentProps> = () => {
    const {playerImage, playerName, playerAuthor } = useHomeSearch();
    const [like, setLike] = useState(false);
    const [playButtonClicked, setPlayButtonClicked] = useState(false);
    const [volume, setVolume] = useState([50]);
    const [count, setCount] = useState([0])
    const VolumeIcon = (volume[0]===0) ? PiSpeakerNoneFill  : (volume[0]>0 && volume[0]<=70) ? PiSpeakerLowFill : PiSpeakerHighFill;

    useEffect(() => {  //for playbar
        if(playButtonClicked){ //if playButton is clicked, start increasing the count
            const interval = setInterval(() => {
                setCount(([prevCount]) => [prevCount + 1]);
            }, 1000);
    
            return () => clearInterval(interval);
        }
        
    }, [playButtonClicked]);

    const handleVolumeChange = (value:number[]) => {
        setVolume(value); //for volume button
    };
    const handleLike = () => {
        setLike(!like); //for like button
    }
    const handlePlay = () => {
        setPlayButtonClicked(!playButtonClicked); //to check if play button is clicked
        if(count[0]>=100) { //if count reaches 100 the playbar will reset
            setCount([0]);
        }else{ setCount(count);}
        console.log(count) //value of count will be recorded, when playButton is clicked to get the latest value of playbar
    }
    const handleChange = (val: number[]) => {
        setCount(val); //whenever slider is slid left or right count will be changed
    }
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 h-full'>

            <Slider className='absolute bottom-[80px] -right-[2px] -pr-[50px] w-full'  onValueChange={handleChange} value={count} defaultValue={[0]} max={100} step={0.2} />
                <div className='flex w-full justify-start'>
                    <div className='flex items-center gap-x-4'>
                        <PlayerSong itemImage={playerImage} itemName={playerName} itemAuthor={playerAuthor} />
                        <div onClick={handleLike} className='cursor-pointer h-10 w-10 mt-4 text-green-500 tborder-white'>
                            {like ? <BiSolidHeart size={22} /> : <BiHeart size={22} color='white' />}
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden fixed col-auto w-fit justify-end items-center right-2 self-center'>
                    <div onClick={handlePlay} className='h-10 w-10 flex items-center justify-center rounded-full bg-white pl-1 cursor-pointer hover:bg-green-500'>
                        {!playButtonClicked ? <BsPlayFill size={30} className='text-black' /> : (count[0]>=100) ? <BsPlayFill size={30} className='text-black' /> : <BsPauseFill size={30} className='text-black mr-1' />}
                    </div>
                </div>

                <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6 '>
                    <AiFillStepBackward size={30} className='text-neutral-400 cursor-pointer hover:text-green-500 transition ' />
                    <div onClick={handlePlay} className='flex items-center justify-center h-10 w-10 rounded-full bg-white pl-1 cursor-pointer hover:bg-green-500'>
                    {!playButtonClicked ? <BsPlayFill size={30} className='text-black' /> : (count[0]>=100) ? <BsPlayFill size={30} className='text-black' /> : <BsPauseFill size={30} className='text-black mr-1' />}
                    </div>
                    <AiFillStepForward size={30} className='text-neutral-400 cursor-pointer hover:text-green-500 transition' />

                </div>
                <div className='hidden md:flex w-full justify-end pr-2'>
                    <div className='flex items-center gap-x-2 w-[150px]'>
                        <VolumeIcon className='cursor-pointer' size={34} />
                        <Slider className='hover:scale-110' onValueChange={handleVolumeChange}  defaultValue={[50]} value={volume} max={100} step={0.2} />
                    </div>


                </div>

            </div>

        </>
    )
}
export default PlayerContent;