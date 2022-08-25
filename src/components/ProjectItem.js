import React from "react";
import "../App.css";

function ProjectItem(props) {
  return (
    <>
      <li className="projects-item">
        <h1 className="projects-title">{props.title}</h1>
        <ul className="projects-description">
          <li>{props.text1}</li>
          <li>{props.text2}</li>
          <li className={props.hide}>{props.text3}</li>
        </ul>

        <div className="button-g" href={props.repoLink}>
          <a href={props.repoLink} target="_blank" rel="noreferrer">
            <img
              className="github-logo"
              src="images/github-logo.png"
              alt="github-logo"
            />
          </a>
        </div>
        <a href={props.externalLink} target="_blank" rel="noreferrer">
          <div className={props.hideDiv}>
            <img className={props.appStyle} src={props.app} alt="app-logo" />
          </div>
        </a>
      </li>
    </>
  );
}

export default ProjectItem;
