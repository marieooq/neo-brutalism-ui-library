import React from "react";
import classNames from "classnames";

type ButtonType = {
  buttonText: string;
  rounded?: "none" | "md" | "full";
  disabled?: boolean;
};

const Button = ({
  buttonText = "Enabled",
  rounded = "none",
  disabled,
}: ButtonType) => {
  return (
    <button
      className={classNames(
        "h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]",
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" },
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
