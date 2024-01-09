import classNames from "classnames";

type ButtonType = {
  buttonText: string;
  rounded?: "none" | "md" | "full";
  size?: "sm" | "md" | "lg";
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  buttonText = "Enabled",
  rounded = "none",
  size = "md",
  color = "cyan",
  disabled,
  className,
}: ButtonType) => {
  return (
    <button
      className={classNames(
        "border-black border-2",

        {
          "bg-violet-200 hover:bg-violet-300 active:bg-violet-400":
            color === "violet" && !disabled,
        },
        {
          "bg-pink-200 hover:bg-pink-300 active:bg-pink-400":
            color === "pink" && !disabled,
        },
        {
          "bg-red-200 hover:bg-red-300 active:bg-red-400":
            color === "red" && !disabled,
        },
        {
          "bg-orange-200 hover:bg-orange-300 active:bg-orange-400":
            color === "orange" && !disabled,
        },
        {
          "bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400":
            color === "yellow" && !disabled,
        },
        {
          "bg-lime-200 hover:bg-lime-300 active:bg-lime-400":
            color === "lime" && !disabled,
        },
        {
          "bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400":
            color === "cyan" && !disabled,
        },
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" },
        { "h-10 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "sm" },
        { "h-12 px-5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "md" },
        { "h-14 px-5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]": size === "lg" },
        {
          "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
            disabled,
        },
        className
      )}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
