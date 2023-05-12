import classNames from "classnames";

type AddIconButtonType = {
  size?: "lg" | "md" | "sm";
  rounded?: "none" | "md" | "full";
};
const AddIconButton = ({
  size = "sm",
  rounded = "none",
}: AddIconButtonType) => {
  return (
    <button
      className={classNames(
        "border-black border-2 rounded bg-[#FFF066] hover:bg-[#FFE500]",
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
      {size === "lg" ? (
        <svg
          width="36"
          height="36"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2638 36V0H19.7362V36H16.2638ZM0 19.7496V16.2504H36V19.7496H0Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
};

export default AddIconButton;
