import { StrictMode } from "react";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetails from "./pages/VanDetails.jsx";
import Layout from "./components/Layout.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../server.js";
import HostLayout from "./components/HostLayout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import HostVans from "./pages/host/HostVans.jsx";
import HostVanDetails from "./pages/host/HostVanDetails.jsx";
import HV_Details from "./pages/host/hostvans/HV_Details.jsx";
import HV_Pricing from "./pages/host/hostvans/HV_Pricing.jsx";
import HV_Photos from "./pages/host/hostvans/HV_Photos.jsx";
function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HV_Details />} />
                <Route path="pricing" element={<HV_Pricing />} />
                <Route path="photos" element={<HV_Photos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App
