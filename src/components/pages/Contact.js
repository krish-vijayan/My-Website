import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Contact() {
  const [email, setEmail] = useState(" ");
  const [linkedin, setLinkedin] = useState(" ");
  const [discord, setDiscord] = useState(" ");
  const [github, setGithub] = useState(" ");
  const [list, setList] = useState();
  const handlingEmail = () => {
    setEmail("kvijayan@uwaterloo.ca");
    setList("list2");
  };

  const handlingLinkedin = () => {
    setLinkedin("in/krish-vijayan/");
    setList("list2");
  };
  const handlingGithub = () => {
    setGithub("/krish-vijayan");
    setList("list2");
  };
  const handlingDiscord = () => {
    setDiscord("KV7#6954");
    setList("list2");
  };

  //   window.scrollTo({
  //     top: 0,
  //   }); /*This will automatically scroll the page to the top*/
  return (
    <>
      <div className="contact-top">
        <h1 className="contact-font">Contact </h1>
      </div>

      <div className="contact-bottom">
        <div>
          <ul className="list">
            <li className="list-item ">
              Email{" "}
              <i
                class="fa-solid fa-envelope contact-button"
                onClick={() => {
                  window.open(
                    "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                  );
                  handlingEmail();
                }}
              />
            </li>

            <li className="list-item">
              LinkedIn{" "}
              <i
                class="fa-brands fa-linkedin contact-button"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/krish-vijayan-617263219",
                    "_blank"
                  );
                  handlingLinkedin();
                }}
              />
            </li>

            <li className="list-item">
              Github{" "}
              <i
                class="fa-brands fa-github contact-button"
                onClick={() => {
                  window.open("https://github.com/krish-vijayan", "_blank");
                  handlingGithub();
                }}
              />
            </li>

            <li className="list-item">
              Discord{" "}
              <i
                class="fa-brands fa-discord contact-button"
                onClick={() => {
                  window.open(
                    "https://discordapp.com/users/KV7#6954/",
                    "_blank"
                  );
                  handlingDiscord();
                }}
              />
            </li>

            <ul className={list}>
              <li className="list2-item">{email}</li>
              <li className="list2-item">{linkedin}</li>
              <li className="list2-item">{github}</li>
              <li className="list2-item">{discord}</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
