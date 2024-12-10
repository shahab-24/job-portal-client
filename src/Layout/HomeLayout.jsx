import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";

const HomeLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
		<Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
