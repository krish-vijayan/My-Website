import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="contact" exact element={<Contact />} />
        <Route path="work" exact element={<Work />} />
        <Route path="projects" exact element={<Projects />} />
        <Route path="interests" exact element={<Interests />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
