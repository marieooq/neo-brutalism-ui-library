import classNames from "classnames";
import { useContext } from "react";
import {
  CopiedCodeContext,
  CopiedCodeDispatchContext,
} from "../context/CopiedCodeContext";

import infoIcon from "../assets/info.svg";

const Snackbar = () => {
  const isCopy = useContext(CopiedCodeContext);
  const dispatch = useContext(CopiedCodeDispatchContext);

  setTimeout(() => {
    dispatch &&
      dispatch({
        type: "done",
      });
  }, 3000);

  return (
    <div
      className={classNames(
        "flex items-center bg-cyan-200 text-sm font-bold px-4 py-3 fixed bottom-10 right-5 z-50 border-black border-2 ease-in-out",
        { block: isCopy },
        { hidden: !isCopy }
      )}
      role="alert"
    >
      <img src={infoIcon} alt="info" className="w-5 h-5 mr-1" />
      <p>Successfully Copied!</p>
    </div>
  );
};

export default Snackbar;
