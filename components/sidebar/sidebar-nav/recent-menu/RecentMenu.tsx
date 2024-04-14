import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import { TbFolderPlus, TbHeartPlus } from "react-icons/tb"
import { TbTriangleInvertedFilled } from "react-icons/tb"
  
  export function RecentMenu() {
    return (
      <Menubar className="pl-5">
        <MenubarMenu >
          <MenubarTrigger ><TbTriangleInvertedFilled className='hover:cursor-pointer hover:opacity-75'/></MenubarTrigger>
          <MenubarContent className="bg-neutral-900 text-white">
            <MenubarItem className="hover:bg-neutral-800">
              Recently Added <MenubarShortcut><MdOutlinePlaylistAdd  size={15}/></MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="hover:bg-neutral-800">
                Liked <MenubarShortcut><TbHeartPlus size={14}/></MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  