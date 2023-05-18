import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Components from "./pages/Components";
import Component from "./pages/Component";
import Layout from "./components/Layout";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/components" element={<LeftSidebar />}>
          <Route index element={<Components />} />
          <Route path=":id" element={<Component />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Route>
    </Routes>
  );
}

export default App;
