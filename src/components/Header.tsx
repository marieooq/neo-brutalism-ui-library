import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import componentsData from "../data/componentsData.tsx";
import { generateMenuList } from "./LeftSidebar";
import githubIcon from "../assets/github.svg";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <header className="bg-white h-20 w-full fixed top-0 z-40">
      <div className="w-full h-full m-auto flex justify-between items-center px-5 md:px-24">
        <Link to="/" className="text-2xl font-bold">
          NEO-UI.
        </Link>
        <nav className="hidden md:block w-1/2">
          <ul className="flex justify-end items-center space-x-4">
            <li className="inline-block hover:underline hover:underline-offset-8">
              <Link to="/components/card">Components</Link>
            </li>
            <li className="inline-block p-2 cursor-pointer">
              <a
                href="https://github.com/marieooq/neo-brutalism-ui-library"
                target="_blank"
              >
                <img src={githubIcon} alt="github" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <Link to="/overview">
                <Button buttonText="Get Started" />
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => {
            setShowSideMenu(true);
          }}
        >
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>
      </div>
      {/* side menu for mobile */}
      <div
        className={`navbar-menu relative z-50 ${
          showSideMenu ? "block" : "hidden"
        }`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={closeSideMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white border-r overflow-y-auto">
          <div className="flex justify-center items-center h-20 p-5">
            <Link
              to="/"
              className="mr-auto text-2xl font-bold leading-none"
              onClick={closeSideMenu}
            >
              NEO-UI.
            </Link>
            <div>
              <button className="navbar-close" onClick={closeSideMenu}>
                <img src={closeIcon} alt="close" className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="p-5">
            <ul className="flex flex-col">
              <div className="pb-8">
                <span className="text-lg font-bold block mb-4">
                  Getting started
                </span>
                <li
                  className="inliine-block hover:underline hover:underline-offset-8 mb-4"
                  onClick={closeSideMenu}
                >
                  <Link to={"/overview"}>Overview</Link>
                </li>
              </div>
              <div className="pb-12">
                <span className="text-lg font-bold block mb-4">Components</span>
                {generateMenuList(componentsData, "mobile", closeSideMenu)}
              </div>
              <div className="pb-4">
                <li className="inline-block cursor-pointer">
                  <a
                    href="https://github.com/marieooq/neo-brutalism-ui-library"
                    target="_blank"
                  >
                    <img src={githubIcon} alt="github" className="w-6 h-6" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
