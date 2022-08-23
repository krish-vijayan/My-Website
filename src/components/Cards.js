import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Find Out More About Me</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/work-img.jpg"
              text="What do I currently work as?"
              label="Work"
              path="work"
            />
            <CardItem
              src="images/projects-img.jpg"
              text="What projects am I involved in?"
              label="Projects"
              path="projets"
            />
            <CardItem
              src="images/img-7.jpg"
              text="What am I interested in?"
              label="Interests"
              path="interests"
            />
            <CardItem
              src="images/contact-img.jpg"
              text="How to contact me?"
              label="Contact"
              path="contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
