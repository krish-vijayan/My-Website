import React from "react";
import { motion } from "framer-motion";

function Interests() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="interests-top">
        <h1 className="interests-font">Interests</h1>
      </div>
      <div className="interests-bottom">
        <div className="resume-background"></div>
      </div>
    </motion.div>
  );
}

export default Interests;
