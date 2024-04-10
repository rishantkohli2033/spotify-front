import React from 'react';

type SidebarBodyProps = {
    
};

const SidebarBody:React.FC<SidebarBodyProps> = () => {
    
    return (
        // <div className='p-4 ml-1 space-y-2 lg:max-h-96 sm:max-h-48 overflow-y-scroll'>
        //     {Array.from(Array(25).keys()).map((index) => (
        //         <div className='bg-neutral-800 text-center rounded-2xl p-1' key={index}>
        //             Content {index + 1}
        //         </div>
        //     ))}
        // </div>
        <div>
            List of Songs!!
        </div>
    )
}
export default SidebarBody;