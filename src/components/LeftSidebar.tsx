import { Link, Outlet } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <section className="w-full flex">
      <div className="bg-yellow-200 fixed top-20 left-0 w-[300px] h-screen overflow-y-scroll p-16">
        <ul className="flex flex-col">
          <li className="inliine-block hover:underline hover:underline-offset-8">
            <Link to="/components/card">Card</Link>
          </li>
        </ul>
      </div>
      <div className="bg-cyan-200 w-[calc(100vw-300px)] ml-[300px] py-24 px-16">
        <Outlet />
      </div>
    </section>
  );
};

export default LeftSidebar;
