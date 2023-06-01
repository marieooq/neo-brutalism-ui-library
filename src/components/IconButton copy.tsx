import classNames from "classnames";

type IconButttonType = {
  size?: "lg" | "md" | "sm";
  rounded?: "none" | "md" | "full";
  icon: string;
  color: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
};

const IconButton = ({
  size = "sm",
  rounded = "none",
  icon,
  color = "cyan",
}: IconButttonType) => {
  return (
    <button
      className={classNames(
        `border-black border-2 rounded`,
        {
          "bg-[#A8A6FF] hover:bg-[#918efa] active:bg-[#807dfa]":
            color === "violet",
        },
        {
          "bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea]":
            color === "pink",
        },
        {
          "bg-[#FF9F9F] hover:bg-[#fa7a7a] active:bg-[#f76363]":
            color === "red",
        },
        {
          "bg-[#FFC29F] hover:bg-[#FF965B] active:bg-[#fa8543]":
            color === "orange",
        },
        {
          "bg-[#FFF59F] hover:bg-[#FFF066] active:bg-[#FFE500]":
            color === "yellow",
        },
        {
          "bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752]":
            color === "lime",
        },
        {
          "bg-[#A6FAFF] hover:bg-[#79F7FF] active:bg-[#53f2fc]":
            color === "cyan",
        },
        {
          "w-10 h-10 p-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":
            size === "sm",
        },
        {
          "w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]":
            size === "md",
        },
        {
          "w-24 h-24 p-9  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]":
            size === "lg",
        },
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" }
      )}
    >
      <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
