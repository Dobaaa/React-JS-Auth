import { Outlet } from "react-router-dom";
import SideBar from "../../components/Forms/SideBar";
import TopBar from "../../components/Forms/TopBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
