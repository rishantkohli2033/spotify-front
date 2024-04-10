import Sidebar from "@/components/sidebar/Sidebar";
export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <Sidebar/>
      <div className="w-full bg-pink-500  m-0">Div 2</div>
      <div className="w-full bg-purple-500 float-right">Div 3</div>
    </div>
  );
}
