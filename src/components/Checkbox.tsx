import classNames from "classnames";
import { useState } from "react";

type CheckBoxType = {
  size?: "sm" | "lg";
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  className?: string;
};

const Checkbox = ({
  color = "orange",
  size = "sm",
  className,
}: CheckBoxType) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          className={classNames(
            "appearance-none outline-none block relative text-center cursor-pointer m-auto before:rounded-sm before:block before:absolute before:content-[''] before:bg-[#FFC29F] before:rounded-sm before:border-black after:block after:content-[''] after:absolute after:border-black after:origin-center after:rotate-45",
            {
              "w-5 h-5 before:w-5 before:h-5 before:border-2 before:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] before:checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] after:left-1.5 after:top-0.5 after:w-2 after:h-3 after:border-r-2 after:border-b-2":
                size === "sm",
            },
            {
              "w-10 h-10 before:w-8 before:h-8 before:border-4 before:hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] before:checked:shadow-[4px_4px_0px_rgba(0,0,0,1)] after:left-2.5 after:top-1.5 after:w-3 after:h-4 after:border-r-4 after:border-b-4":
                size === "lg",
            },
            { "after:opacity-1 before:checked:bg-[#FF965B]": checked },
            { "after:opacity-0": checked === false },
            {
              "before:bg-violet-200 before:checked:bg-violet-300":
                color === "violet",
            },
            {
              "before:bg-pink-200 before:checked:bg-pink-300": color === "pink",
            },
            {
              "before:bg-red-200 before:checked:bg-red-300": color === "red",
            },
            {
              "before:bg-orange-200 before:checked:bg-orange-300":
                color === "orange",
            },
            {
              "before:bg-yellow-200 before:checked:bg-yellow-300":
                color === "yellow",
            },
            {
              "before:bg-lime-200 before:checked:bg-lime-300": color === "lime",
            },
            {
              "before:bg-cyan-200 before:checked:bg-cyan-300": color === "cyan",
            },
            className
          )}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </label>
    </>
  );
};

export default Checkbox;
