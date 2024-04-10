import React from 'react';
import { GoHome } from "react-icons/go";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { BiSearchAlt2 } from "react-icons/bi";
import Button from '../button/Button';
type HeaderProps = {};

const Header:React.FC<HeaderProps> = () => {
    
    return (
        <div className='h-fit bg-gradient-to-b from-emerald-800 p-6'>
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden md:flex gap-x-2 items-center'>
                    <button className='flex rounded-full bg-black items-center justify-center hover:opacity-75 transition'>
                        <RxCaretLeft fontSize={35} className='text-white'/>
                    </button>
                    <button className='flex rounded-full bg-black items-center justify-center hover:opacity-75 transition'>
                        <RxCaretRight fontSize={35} className='text-white'/>
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button className='rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <GoHome fontSize={30} />
                    </button>
                    <button className='rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <BiSearchAlt2 fontSize={28} />
                    </button>
                </div>
                <div className='flex justify-between items-center gap-x-4'>
                    <>
                        <div>
                            <Button/>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}
export default Header;