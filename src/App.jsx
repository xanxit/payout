import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import BaseTable from "./components/BaseTable";

function App() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-min md:w-64">
        <SideBar />
      </div>
      <div className="w-full md:w-[calc(100%-256px)]">
        <TopNav/>
        <Header />
        <BaseTable/>
      </div>
    </div>
  );
}

export default App;
