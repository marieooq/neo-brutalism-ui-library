import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="pt-20">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
