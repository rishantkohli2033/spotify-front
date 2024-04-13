"use client"
import MainContent from "@/components/main-content/MainContent";
import Player from "@/components/main-content/player/Player";
import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import useHomeSearch from "@/store/useHomeSearch";
export default function Home() {
  const {searchClicked, player} = useHomeSearch();
  return (
    <div className="flex w-screen h-screen justify-center">
      <Sidebar/>
      { !searchClicked && <MainContent/>}
      { searchClicked && <Search />}
      {player && <Player/>}
    </div>
  );
}
