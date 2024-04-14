"use client"
import React, { useState } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { PiHouse, PiHouseFill } from 'react-icons/pi';
import useHomeSearch from '@/store/useHomeSearch';
import SignupButton from '../button/SignupButton';
import { SideSheet } from './SideSheet';
import ListItem from './list-item/ListItem';
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    const { searchClicked, setSearchClicked, homeClicked, setHomeClicked } = useHomeSearch(); //global state
    const searchClick = () => {
        if (homeClicked) setHomeClicked(false);
        setSearchClicked(!searchClicked);
    }
    const homeClick = () => {
        if (searchClicked) setSearchClicked(false);
        setHomeClicked(!homeClicked);
    }
    
    return (
        <>
            <div className={`h-fit ${!searchClicked && `bg-gradient-to-b from-emerald-800`}  p-6`}>
                <div className='w-full mb-4 flex items-center justify-between'>
                    <div className='hidden md:flex gap-x-2 items-center'>
                        <button className='flex rounded-full bg-black items-center justify-center hover:opacity-75 transition'>
                            <RxCaretLeft fontSize={35} className='text-white' />
                        </button>
                        <button className='flex rounded-full bg-black items-center justify-center hover:opacity-75 transition'>
                            <RxCaretRight fontSize={35} className='text-white' />
                        </button>
                    </div>
                    <div className='flex md:hidden gap-x-2 items-center'>
                        <div className='md:hidden flex items-center justify-start fixed inset-0 inset-y-20'>
                            <div className='mx-2 my-2'>
                                 <SideSheet />{/*for sidebar in mobile mode */}
                            </div>
                        </div>

                        <button onClick={homeClick} className='rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75 transition'>
                            {!homeClicked ? <PiHouse fontSize={30} /> : <PiHouseFill fontSize={30} className='text-green-500' />}
                        </button>
                        <button onClick={searchClick} className='rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75 transition'>
                            {!searchClicked ? <BiSearchAlt2 fontSize={28} /> : <BiSolidSearchAlt2 fontSize={28} className='text-green-500' />}
                        </button>
                    </div>
                    <div className='flex justify-between items-center gap-x-4'>
                        <>
                            <div>
                                <SignupButton />
                            </div>
                        </>
                    </div>

                </div>

                {!searchClicked && (
                    <>
                        <h1 className='text-white text-3xl font-semibold'>
                            Good Morning
                        </h1>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4'>
                            <ListItem />
                        </div>
                    </>
                )}

                {searchClicked && (
                    <>
                        <h1 className='text-white text-3xl font-semibold'>
                            Search
                        </h1>

                    </>
                )}


            </div>
        </>
    )
}
export default Header;