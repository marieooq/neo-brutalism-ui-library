import { Link, Outlet } from "react-router-dom";
import componentsData from "../data/componentsData.js";

const LeftSidebar = () => {
  return (
    <section className="w-full flex">
      <div className="bg-yellow-200 fixed top-20 left-0 w-[300px] h-screen overflow-y-scroll p-16">
        <ul className="flex flex-col">
          <div className="pb-8">
            <label className="text-lg font-bold block mb-4">
              Getting started
            </label>
            <li className="inliine-block hover:underline hover:underline-offset-8 mb-4">
              <Link to={"/overview"}>Overview</Link>
            </li>
          </div>
          <div className="pb-4">
            <label className="text-lg font-bold block mb-4">Components</label>
            {componentsData.map((obj, index) => {
              return (
                <li
                  className="inliine-block hover:underline hover:underline-offset-8 mb-4"
                  key={index}
                >
                  <Link to={`/components/${obj.path}`}>{obj.name}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
      <div className="bg-cyan-200 w-[calc(100vw-300px)] ml-[300px] p-16">
        <Outlet />
      </div>
    </section>
  );
};

export default LeftSidebar;
