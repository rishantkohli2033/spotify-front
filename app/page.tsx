import MainContent from "@/components/main-content/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center">
      <Sidebar/>
      <MainContent/>
    </div>
  );
}
