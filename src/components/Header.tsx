import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import componentsData from "../data/componentsData.js";

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
        <nav className="hidden md:block">
          <ul className="flex justify-end items-center">
            <li className="inliine-block hover:underline hover:underline-offset-8 mr-8">
              <Link to="/components/card">Components</Link>
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
            <button className="navbar-close" onClick={closeSideMenu}>
              <img src={closeIcon} alt="close" className="w-6 h-6" />
            </button>
          </div>
          <div className="p-5">
            <ul className="flex flex-col">
              <div className="pb-8">
                <label className="text-lg font-bold block mb-4">
                  Getting started
                </label>
                <li
                  className="inliine-block hover:underline hover:underline-offset-8 mb-4"
                  onClick={closeSideMenu}
                >
                  <Link to={"/overview"}>Overview</Link>
                </li>
              </div>
              <div className="pb-4">
                <label className="text-lg font-bold block mb-4">
                  Components
                </label>
                {componentsData.map((obj, index) => {
                  return (
                    <li
                      className="inliine-block hover:underline hover:underline-offset-8 mb-4"
                      key={index}
                      onClick={closeSideMenu}
                    >
                      <Link to={`/components/${obj.path}`}>{obj.name}</Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
