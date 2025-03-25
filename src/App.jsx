import { StrictMode } from "react";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetails from "./pages/VanDetails.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../server.js";
function App() {
  return (
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  )
}

export default App
