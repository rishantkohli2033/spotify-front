import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
 import { Button } from "@/components/ui/button"; 
import { MdOutlineLogin } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type SignupButtonProps = {
    
};

const SignupButton:React.FC<SignupButtonProps> = () => {
    
    return (
        <>
            <div className='cursor-pointer group relative'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-2 text-dark-green-s p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
                >
                    <p className='text-sm font-bold'>John Doe</p>
                </div>
            </div>

        </>

    )
}
export default SignupButton;