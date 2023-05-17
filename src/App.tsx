import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="getting-started" element={<>Getting Started</>} />
    </Routes>
  );
}

export default App;
