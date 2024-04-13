import React from 'react';
import PlayerContent from './player-content/PlayerContent';

type PlayerProps = {
    
};

const Player:React.FC<PlayerProps> = () => {
    
    return (
        <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
            <PlayerContent/>
        </div>
    )
}
export default Player;