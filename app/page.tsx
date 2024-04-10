import MainContent from "@/components/main-content/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <Sidebar/>
      <MainContent/>
    </div>
  );
}
