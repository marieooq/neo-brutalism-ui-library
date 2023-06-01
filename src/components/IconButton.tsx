import classNames from "classnames";

type IconButtonType = {
  size?: "lg" | "md" | "sm";
  rounded?: "none" | "md" | "full";
  icon: string;
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
};

const IconButton = ({
  size = "sm",
  rounded = "none",
  icon,
  color = "cyan",
}: IconButtonType) => {
  return (
    <button
      className={classNames(
        "border-black border-2",
        {
          "bg-violet-200 hover:bg-violet-300 active:bg-violet-400":
            color === "violet",
        },
        {
          "bg-pink-200 hover:bg-pink-300 active:bg-pink-400": color === "pink",
        },
        {
          "bg-red-200 hover:bg-red-300 active:bg-red-400": color === "red",
        },
        {
          "bg-orange-200 hover:bg-orange-300 active:bg-orange-400":
            color === "orange",
        },
        {
          "bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400":
            color === "yellow",
        },
        {
          "bg-lime-200 hover:bg-lime-300 active:bg-lime-400": color === "lime",
        },
        {
          "bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400": color === "cyan",
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
          "w-24 h-24 p-9 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]":
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
