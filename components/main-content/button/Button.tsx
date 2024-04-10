import React from 'react';

type ButtonProps = {
    
};

const Button:React.FC<ButtonProps> = () => {
    
    return (
        <div >
            <button className='w-full rounded-full bg-green-500 border border-transparent px-3 py-3 text-black font-bold hover:opacity-75 transition'>
                Signup
            </button>
        </div>
    )
}
export default Button;