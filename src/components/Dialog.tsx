import Button from "./Button";
import classNames from "classnames";

type DialogType = {
  message: string;
  width?: "fit" | "full" | "1/2" | "1/3";
  cancelButtonText?: string;
  actionButtonText?: string;
  actionButtonColor?:
    | "violet"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "cyan";
  className?: string;
};

const Dialog = ({
  message,
  width,
  cancelButtonText,
  actionButtonText,
  actionButtonColor,
  className,
}: DialogType) => {
  return (
    <div
      className={classNames(
        "w-72 md:w-80 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center",
        { "w-fit": width === "fit" },
        { "w-full": width === "full" },
        { "w-1/2": width === "1/2" },
        { "w-1/3": width === "1/3" },
        className
      )}
    >
      <div>
        <h1 className="text-2xl mb-4">{message}</h1>
        <div className="flex space-x-2 mx-auto w-32">
          {cancelButtonText && (
            <button className="text-base">{cancelButtonText}</button>
          )}
          {actionButtonText && (
            <Button
              buttonText={actionButtonText}
              rounded="full"
              color={actionButtonColor && actionButtonColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
