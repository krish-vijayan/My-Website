import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { Helmet } from "react-helmet";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Projects from "./components/pages/Projects";
import Interests from "./components/pages/Interests";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Krish's Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="contact" exact element={<Contact />} />
          <Route path="work" exact element={<Work />} />
          <Route path="projects" exact element={<Projects />} />
          <Route path="interests" exact element={<Interests />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
