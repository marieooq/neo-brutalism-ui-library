import classNames from "classnames";
import { useState } from "react";

const CheckboxLarge = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          className={classNames(
            "appearance-none outline-none block relative text-center cursor-pointer m-auto w-10 h-10 before:rounded-sm before:block before:absolute before:content-[''] before:bg-[#FFC29F] before:w-8 before:h-8 before:rounded-sm before:border-black before:border-4 before:hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]  after:block after:content-[''] after:absolute after:left-2.5 after:top-1.5 after:w-3 after:h-4 after:border-black after:border-r-4 after:border-b-4 after:origin-center after:rotate-45",
            { "after:opacity-1 before:checked:bg-[#FF965B]": checked },
            { "after:opacity-0": checked === false }
          )}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </label>
    </>
  );
};

export default CheckboxLarge;
