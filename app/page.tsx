"use client"
import MainContent from "@/components/main-content/MainContent";
import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import useHomeSearch from "@/store/useHomeSearch";
export default function Home() {
  const {searchClicked} = useHomeSearch();
  return (
    <div className="flex w-screen h-screen justify-center">
      <Sidebar/>
      { !searchClicked && <MainContent/>}
      { searchClicked && <Search />}
    </div>
  );
}
