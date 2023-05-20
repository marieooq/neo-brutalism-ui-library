import Header from "./Header";
import Snackbar from "./Snackbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="pt-20">
      <Snackbar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
