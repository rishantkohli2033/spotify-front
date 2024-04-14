import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { FaPlus } from "react-icons/fa6"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import { TbFolderPlus } from "react-icons/tb"
  
  export function Menu() {
    return (
      <Menubar >
        <MenubarMenu>
          <MenubarTrigger><FaPlus className="hover:cursor-pointer"/></MenubarTrigger>
          <MenubarContent className="bg-neutral-900 text-white">
            <MenubarItem className="hover:bg-neutral-800">
              Create a New Playlist <MenubarShortcut><MdOutlinePlaylistAdd  size={15}/></MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="hover:bg-neutral-800">
            Create a New Folder <MenubarShortcut><TbFolderPlus  size={14}/></MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  