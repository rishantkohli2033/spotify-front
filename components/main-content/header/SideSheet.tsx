import SidebarTop from "@/components/sidebar/SidebarTop"
import { Menu } from "@/components/sidebar/sidebar-nav/Menu/Menu"
import SidebarBody from "@/components/sidebar/sidebar-nav/sidebar-body/SidebarBody"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"

export function SideSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="flex rounded-full bg-transparent items-center justify-center hover:opacity-75 transition"><FaAnglesRight fontSize={10} className="text-green-500"/></button>
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-neutral-900 text-white">
                <SheetHeader>
                    <SidebarTop />
                </SheetHeader>
                <div className="flex items-center justify-center left-20 w-full">
                    <div className="m-auto">
                        <Menu />
                    </div>
                </div>

                <div className="hover:overflow-y-auto overflow-hidden h-full">
                <SidebarBody/>    
                </div>
                
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
