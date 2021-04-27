import React, { Component } from "react";
import fb from "../images/fb.png";
import twit from "../images/twit.png";
import disc from "../images/disc.png";
import insta from "../images/insta.png";
import slack from "../images/slack.png";
import netflix from "../images/netflix.png";
import spotify from "../images/spotify.png";

export default class Landing03 extends Component {
  render() {
    return (
      <section className="landing-03">
        <div className="landing-03-container">
          <div className="text-set-03">
            <h1>Your ultimate portable todo-list!</h1>
            <p>
              Immerse to-do is 100% completely free and created with simplicity
              in mind. Jotting-down a task with a few easy <br /> taps can never
              be more simpler. Immerse to-do also uses minimal space and is not
              intrusive - only effective in <br />
              reminding you if tasks is awaiting completion.{" "}
            </p>
            <p className="label-03">Immerse to-do is being used by:</p>
            <ul className="landing-03-brands">
              <img src={slack} />
              <img src={netflix} />
              <img src={spotify} />
            </ul>
            <p className="label-03">
              We'll be happy for you to visit our social media pages.
            </p>
            <div className="social-icons">
              <img src={fb} />
              <img src={twit} />
              <img src={insta} />
              <img src={disc} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
