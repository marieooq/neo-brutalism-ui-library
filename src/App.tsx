import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Components from "./pages/Components";
import Component from "./pages/Component";
import Layout from "./components/Layout";
import LeftSidebar from "./components/LeftSidebar";
import {
  CopiedCodeContext,
  CopiedCodeDispatchContext,
} from "./context/CopiedCodeContext.js";

export type ACTIONTYPE = { type: "copied" } | { type: "done" };

const copyReducer = (_: any, action: ACTIONTYPE) => {
  switch (action.type) {
    case "copied": {
      return true;
    }
    case "done": {
      return false;
    }
    default: {
      return false;
    }
  }
};

function App() {
  const [isCopy, dispatch] = useReducer(copyReducer, false);

  return (
    <CopiedCodeContext.Provider value={isCopy}>
      <CopiedCodeDispatchContext.Provider value={dispatch}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/overview" element={<LeftSidebar />}>
              <Route index element={<GettingStarted />} />
            </Route>
            <Route path="/components" element={<LeftSidebar />}>
              <Route index element={<Components />} />
              <Route path=":id" element={<Component />} />
            </Route>
            <Route path="*" element={<>Not Found</>} />
          </Route>
        </Routes>
      </CopiedCodeDispatchContext.Provider>
    </CopiedCodeContext.Provider>
  );
}

export default App;
