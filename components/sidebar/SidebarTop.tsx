"use client"
import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { PiHouse, PiHouseFill } from 'react-icons/pi';
import useHomeSearch from '@/store/useHomeSearch';

type SidebarTopProps = {};

const SidebarTop: React.FC<SidebarTopProps> = () => {
    const {searchClicked, setSearchClicked, homeClicked, setHomeClicked} = useHomeSearch(); //global state
    const searchClick = () =>{
        if(homeClicked) setHomeClicked(false);
        setSearchClicked(!searchClicked);
    }
    const homeClick = () =>{
        if(searchClicked) setSearchClicked(false);
        setHomeClicked(!homeClicked);
    }
    return (
        <div className="flex flex-col rounded m-2 p-2 h-fit  bg-neutral-900">
            <div onClick={homeClick} className='flex items-center pl-1  hover:cursor-pointer hover:text-green-500 transition'>
                {!homeClicked  ? <PiHouse fontSize={27}/> : <PiHouseFill className='text-green-500' fontSize={27}/>}
                <div className={`items-center m-2 pl-2 ${homeClicked && `text-green-500`}`}>Home</div>
            </div>
           
            <div onClick={searchClick} className='flex items-center pl-2  hover:cursor-pointer hover:text-green-500 transition'>
            
                {!searchClicked ? (<BiSearchAlt2 fontSize={25} />) :
                    (<BiSolidSearchAlt2 className='text-green-500' fontSize={25} />)}
                <div className={`items-center m-2 pl-2 ${searchClicked && `text-green-500`}`}>Search</div>
        
            </div>
            
        </div>
    )
}
export default SidebarTop;