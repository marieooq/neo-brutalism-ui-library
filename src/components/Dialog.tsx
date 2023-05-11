type DialogType = {
  message?: string;
  actionButtonText?: string;
  cancelButtonText?: string;
};

const Dialog = ({
  message = "The message you want goes in here.",
  actionButtonText = "Enabled",
  cancelButtonText = "Cancel",
}: DialogType) => {
  return (
    <div className="w-96 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
      <div>
        <h1 className="text-2xl mb-4">{message}</h1>
        <div className="flex space-x-2 mx-auto w-36">
          <button className="text-base">{cancelButtonText}</button>
          <button className="text-base border-2 border-black rounded-3xl p-2.5 bg-[#A6FAFF] shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {actionButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
