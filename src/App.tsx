import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Components from "./pages/Components";
import Component from "./pages/Component";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/components">
          <Route index element={<Components />} />
          <Route path=":id" element={<Component />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Route>
    </Routes>
  );
}

export default App;
