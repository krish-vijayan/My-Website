import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <HeroSection />
    </motion.div>
  );
}

export default Home;
