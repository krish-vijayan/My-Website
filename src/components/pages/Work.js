import React from "react";
import "../../App.css";
import { motion } from "framer-motion";

function Work() {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, transition: { duration: 0.1 } }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="work-top">
          <h1 className="work-font">Work</h1>
        </div>
        <div className="work-bottom">
          <div className="resume-background">
            <img className="resume" src="/images/resume-work.png" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Work;
