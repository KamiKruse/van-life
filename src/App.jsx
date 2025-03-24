import { StrictMode } from "react";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Vans from "./components/Vans.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  )
}

export default App
