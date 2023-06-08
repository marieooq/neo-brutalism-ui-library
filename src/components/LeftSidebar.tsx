import { useContext } from "react";
import classNames from "classnames";
import { Link, Outlet, useLocation } from "react-router-dom";
import componentsData from "../data/componentsData.js";
import { WindowHeightContext } from "../context/WindowHeightContext.js";

const LeftSidebar = () => {
  const location = useLocation();
  const isExceededWindowHeight = useContext(WindowHeightContext);

  return (
    <section className="w-full flex">
      <div className="hidden md:block bg-yellow-200 fixed top-20 left-0 w-[360px] h-screen overflow-y-scroll p-24">
        <ul className="flex flex-col">
          <div className="pb-8">
            <label className="text-lg font-bold block mb-4">
              Getting started
            </label>
            <li
              className={classNames(
                "inliine-block hover:underline hover:underline-offset-8 mb-4",
                {
                  "font-bold underline underline-offset-8":
                    location.pathname.includes("overview"),
                }
              )}
            >
              <Link to={"/overview"}>Overview</Link>
            </li>
          </div>
          <div className="pb-4">
            <label className="text-lg font-bold block mb-4">Components</label>
            {componentsData.map((obj, index) => {
              return (
                <li
                  className={classNames(
                    "inliine-block hover:underline hover:underline-offset-8 mb-4",
                    {
                      "font-bold underline underline-offset-8":
                        location.pathname.includes(obj.path),
                    }
                  )}
                  key={index}
                >
                  <Link to={`/components/${obj.path}`}>{obj.name}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
      <div
        className={classNames(
          "bg-cyan-200 w-full md:w-[calc(100vw-360px)] md:ml-[360px] p-5 md:p-24",
          { "h-full": isExceededWindowHeight === true },
          { "h-screen": isExceededWindowHeight === false }
        )}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default LeftSidebar;
