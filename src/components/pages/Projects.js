import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import ProjectItem from "../ProjectItem";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="projects-top">
        <h1 className="projects-font">Projects</h1>
      </div>
      <div className="projects-bottom">
        <div className="projects">
          <div className="projects-container">
            <div className="projects-wrapperr">
              <ul className="projects-item">
                <ProjectItem
                  title="Array Visualization"
                  text1="Utilized React JS, and CSS to develop an interactive array visualization.
                  "
                  text2="Interactive input creates a visual representation of how the result array would look like. 
                  "
                  text3="Displays introductory information of programming elements such as source-code editors and compilers."
                  hide="nope"
                  hideDiv="button-a"
                  app="images/app-logo.png"
                  appStyle="app-logo"
                  repoLink="https://github.com/krish-vijayan/array-visualization"
                  externalLink="https://krish-vijayan-array-visualization.netlify.app/"
                />
                <ProjectItem
                  title="NBA On Top!"
                  text1="Utilized React JS and a couple of NBA related APIs to create an application that displays entered players' current season statistics.
                  "
                  text2="Interactive input creates a NBA sports card themed card displaying the player's PPG, APG, and RPG. 
                  "
                  text3="Also displays the player's headshot and team logo."
                  hide="nope"
                  hideDiv="button-a"
                  app="images/app-logo.png"
                  appStyle="app-logo"
                  repoLink="https://github.com/krish-vijayan/nba-on-top"
                  externalLink="https://nba-on-top.herokuapp.com/"
                />
                <ProjectItem
                  title="Weather Application"
                  text1="Utilized React JS, CSS, and a weather API to develop a weather application"
                  text2="Displays city name, temperature in Celsius and Fahrenheit, condition icon with text, and the location's date and time. "
                  text3="something"
                  hide="hide"
                  hideDiv="button-a"
                  app="images/app-logo.png"
                  appStyle="app-logo"
                  repoLink="https://github.com/krish-vijayan/weather-app"
                  externalLink="https://krish-vijayan-weather-app.netlify.app/"
                />
                <ProjectItem
                  title="Discord Dorm Bot"
                  text1="Utilized Node JS, Discord JS, and Calendar API by Google to develop a discord bot."
                  text2="Once it is asked a command in our dorm server it will respond with accordance to dorm schedule calendars. "
                  text3="something"
                  hide="hide"
                  hideDiv="YESSS"
                  app="images/app-logo.png"
                  appStyle="hide"
                  repoLink="https://github.com/krish-vijayan/dorm-discord-bot"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
