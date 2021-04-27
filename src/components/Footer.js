import React, { Component } from "react";
import fb from "../images/fb.png";
import twit from "../images/twit.png";
import disc from "../images/disc.png";
import insta from "../images/insta.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="main-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <h1>immerseTodo</h1>
              <p>Social Media</p>
              <ul className="footer-social-set">
                <img src={fb} />
                <img src={twit} />
                <img src={disc} />
                <img src={insta} />
              </ul>
              <p>Contact: +639173731706</p>
            </div>
            <div className="footer-menu">
              <ul className="footer-m-1">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Refund</li>
              </ul>
              <ul className="footer-m-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Refund</li>
              </ul>
            </div>
          </div>
          <div className="footer-end">
            <p>2021 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
