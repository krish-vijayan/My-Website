import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { Helmet } from "react-helmet";

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
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
