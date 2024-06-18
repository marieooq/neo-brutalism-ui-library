import classNames from "classnames";

type ProgressBarType = {
  minValue?: number;
  maxValue?: number;
  rounded?: "none" | "md" | "full";
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  disabled?: boolean;
  showPercentage?: boolean;
  className?: string;
  currentValue?: number;
};

const ProgressBar = ({
  minValue = 0,
  maxValue = 100,
  rounded = "none",
  color = "cyan",
  currentValue = 0,
  showPercentage = true,
  disabled,
  className,
}: ProgressBarType) => {
  const clampedValue = Math.min(maxValue, Math.max(currentValue, minValue));
  const widthPercentage =
    ((clampedValue - minValue) / (maxValue - minValue)) * 100;

  return (
    <div
      className={classNames(
        "w-72 md:w-full max-w-md border-black border-2 focus:outline-none h-9 overflow-hidden shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-white",
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" },
        { "shadow-[2px_2px_0px_rgba(0,0,0,1)]": !disabled },
        {
          "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
            disabled,
        },
        className
      )}
    >
      <div
        style={{ width: widthPercentage + "%" }}
        className={classNames(
          "h-full flex flex-row items-center justify-end overflow-hidden",
          {
            "bg-violet-200 hover:bg-violet-300":
              color === "violet" && !disabled,
          },
          {
            "bg-pink-200 hover:bg-pink-300": color === "pink" && !disabled,
          },
          {
            "bg-red-200 hover:bg-red-300": color === "red" && !disabled,
          },
          {
            "bg-orange-200 hover:bg-orange-300":
              color === "orange" && !disabled,
          },
          {
            "bg-yellow-200 hover:bg-yellow-300":
              color === "yellow" && !disabled,
          },
          {
            "bg-lime-200 hover:bg-lime-300": color === "lime" && !disabled,
          },
          {
            "bg-cyan-200 hover:bg-cyan-300": color === "cyan" && !disabled,
          },
          { "rounded-none": rounded === "none" },
          { "rounded-md": rounded === "md" },
          { "rounded-full": rounded === "full" }
        )}
      >
        {showPercentage && !disabled && (
          <h1
            className={classNames(
              "mr-2",
              widthPercentage !== 100 ? "font-bold" : "font-black",
              widthPercentage !== 100 ? "opacity-60" : "opacity-100",
              className
            )}
          >
            {Math.round(widthPercentage)}%
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
