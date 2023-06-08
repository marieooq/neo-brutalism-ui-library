import React, { createContext } from "react";
import { WINDOW_HEIGHT_ACTION_TYPE } from "../App";

type WindowHeightType = boolean;
type WindowHeightDispatchType =
  React.Dispatch<WINDOW_HEIGHT_ACTION_TYPE> | null;

export const WindowHeightContext = createContext<WindowHeightType>(false);
export const WindowHeightDispatchContext =
  createContext<WindowHeightDispatchType>(null);
