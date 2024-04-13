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

type SignupButtonProps = {
    
};

const SignupButton:React.FC<SignupButtonProps> = () => {
    
    return (
        <div className="relative">
            <Drawer>
            <DrawerTrigger> 
                <MdOutlineLogin fontSize={28} className="text-white hover:bg-green-500 hover:text-black rounded-lg"/>
            </DrawerTrigger>
            <DrawerContent className="bg-transparent">
                <DrawerFooter className="items-center">
                    <Button className="rounded-full bg-green-500">Signup</Button>
                    <Button className="rounded-full ">Login</Button>
                    <DrawerClose className="absolute top-2 right-2 -mt-1">
                        <IoIosClose className="hover:bg-red-500 rounded-full"/>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </div>
        

    )
}
export default SignupButton;