import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

type DropdownType = {
  title: string;
  list: { to: string; name: string }[];
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  className?: string;
};

const DropDown = ({ title, list, color = "lime", className }: DropdownType) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className={classNames(
              "inline-flex w-72 justify-center gap-x-1.5 px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)]",
              { "bg-violet-200 hover:bg-violet-300": color === "violet" },
              { "bg-pink-200 hover:bg-pink-300": color === "pink" },
              { "bg-red-200 hover:bg-red-300": color === "red" },
              { "bg-orange-200 hover:bg-orange-300": color === "orange" },
              { "bg-yellow-200 hover:bg-yellow-300": color === "yellow" },
              { "bg-lime-200 hover:bg-lime-300": color === "lime" },
              { "bg-cyan-200 hover:bg-cyan-300": color === "cyan" },
              className
            )}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            {title}
            <svg
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={classNames(
            "w-72 absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-black border-2 divide-y divide-black",
            { hidden: !open }
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div role="none">
            {list.map((item, index) => {
              return (
                <Link
                  to={item.to}
                  className={classNames(
                    "block px-4 py-2 text-sm border-black border-b-2 hover:font-medium",
                    { "hover:bg-violet-200": color === "violet" },
                    { "hover:bg-pink-200": color === "pink" },
                    { "hover:bg-red-200": color === "red" },
                    { "hover:bg-orange-200": color === "orange" },
                    { "hover:bg-yellow-200": color === "yellow" },
                    { "hover:bg-yellow-200": color === "yellow" },
                    { "hover:bg-lime-200": color === "lime" },
                    { "hover:bg-cyan-200": color === "cyan" }
                  )}
                  role="menuitem"
                  id={`menu-item-${index}`}
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
