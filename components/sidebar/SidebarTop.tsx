"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { GoHome } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidSearchAlt2 } from "react-icons/bi";
type SidebarTopProps = {};

const SidebarTop: React.FC<SidebarTopProps> = () => {
    const[searchClicked, setSearchClicked] = useState(false);
    const handleClick = () =>{
        setSearchClicked(!searchClicked);
    }
    return (
        <div className="flex flex-col rounded m-2 p-2 h-fit  bg-neutral-900">
            <div className='flex items-center pl-2 hover:text-fuchsia-600'>
                <GoHome fontSize={25}/>
                <Button variant="ghost" className="self-start">Home</Button>
            </div>
            <div onClick={handleClick} className='flex items-center pl-2 hover:text-fuchsia-600'>
                {!searchClicked ? (<BiSearchAlt2 fontSize={25}/>) :
                (<BiSolidSearchAlt2 fontSize={25}/>)}
                <Button variant="ghost" className="self-start">Search</Button>
            </div>
            
        </div>
    )
}
export default SidebarTop;