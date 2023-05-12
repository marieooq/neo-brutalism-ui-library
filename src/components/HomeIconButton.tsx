import classNames from "classnames";

type HomeIconButtonType = {
  disabled?: boolean;
};

const HomeIconButton = ({ disabled }: HomeIconButtonType) => {
  return (
    <button
      className={classNames(
        "w-10 h-10 leading-10 text-center border-black border-2 p-2 bg-[#FF9F9F] hover:bg-[#FF6767] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FF2626] rounded-full",
        {
          "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
            disabled,
        }
      )}
      disabled={disabled}
    >
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="black" />
      </svg>
    </button>
  );
};

export default HomeIconButton;
