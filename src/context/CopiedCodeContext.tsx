import React, { createContext } from "react";
import { COPY_ACTION_TYPE } from "../App";

type copiedCodeContext = boolean;
type copiedCodeDispatch = React.Dispatch<COPY_ACTION_TYPE> | null;

export const CopiedCodeContext = createContext<copiedCodeContext>(false);
export const CopiedCodeDispatchContext =
  createContext<copiedCodeDispatch>(null);
