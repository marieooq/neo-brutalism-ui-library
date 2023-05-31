import classNames from "classnames";

type ButtonType = {
  buttonText: string;
  rounded?: "none" | "md" | "full";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const Button = ({
  buttonText = "Enabled",
  rounded = "none",
  size = "md",
  disabled,
}: ButtonType) => {
  return (
    <button
      className={classNames(
        "border-black border-2  bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#53f2fc]",
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" },
        { "h-10 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "sm" },
        { "h-12 px-5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "md" },
        { "h-14 px-5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]": size === "lg" },
        {
          "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
            disabled,
        }
      )}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
