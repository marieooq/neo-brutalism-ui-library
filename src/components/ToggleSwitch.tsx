import classNames from "classnames";

type ToggleSwitchType = {
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  text?: string;
  disabled?: boolean;
  className?: string;
};

const ToggleSwitch = ({
  color,
  text,
  disabled = false,
  className,
}: ToggleSwitchType) => {
  return (
    <label className="relative inline-flex items-center mb-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        disabled={disabled}
      />
      <div
        className={classNames(
          "w-11 h-6 bg-gray-400 rounded-full border-2 border-black peer-checked:bg-pink-300 peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-4 after:h-4 after:bg-white after:rounded-full after:border-2 after:border-black after:transition-all peer-checked:after:translate-x-5",
          {
            "peer-checked:bg-violet-300": color === "violet",
          },
          {
            "peer-checked:bg-pink-300": color === "pink",
          },
          {
            "peer-checked:bg-red-300": color === "red",
          },
          {
            "peer-checked:bg-orange-300": color === "orange",
          },
          {
            "peer-checked:bg-yellow-300": color === "yellow",
          },
          {
            "peer-checked:bg-lime-300": color === "lime",
          },
          {
            "peer-checked:bg-cyan-300": color === "cyan",
          },
          className
        )}
      ></div>
      {text && <span className="ms-3 text-md font-medium">{text}</span>}
    </label>
  );
};

export default ToggleSwitch;
