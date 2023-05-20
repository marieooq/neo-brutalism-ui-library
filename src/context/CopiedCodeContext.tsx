import React, { createContext } from "react";
import { ACTIONTYPE } from "../App";

type copiedCodeContext = boolean;
type copiedCodeDispatch = React.Dispatch<ACTIONTYPE> | null;

export const CopiedCodeContext = createContext<copiedCodeContext>(false);
export const CopiedCodeDispatchContext =
  createContext<copiedCodeDispatch>(null);
