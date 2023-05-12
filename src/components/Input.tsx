import classNames from "classnames";

type InputType = {
  rounded?: "none" | "md" | "full";
};

const Input = ({ rounded = "none" }: InputType) => {
  return (
    <input
      className={classNames(
        "w-60 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]",
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" }
      )}
      placeholder="you@example.com"
    />
  );
};

export default Input;
