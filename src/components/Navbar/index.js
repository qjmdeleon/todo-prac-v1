import React, { useState, Component } from "react";
import { NavbarData } from "./NavbarData";
import "./NavbarStyles.css";

export default class Navbar extends Component {
  state = { active: false };

  toggleMenu = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <h1>immerseTodo</h1>
          </div>
          <div className="menu-icon" onClick={this.toggleMenu}>
            <i
              className={this.state.active ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          {/* prettier-ignore */}
          <ul className={this.state.active ? "nav-menu active" : "nav-menu"} onClick={this.toggleMenu}>
            {NavbarData.map((item, index) => {
                return(
                    <li className={item.class} key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                )
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
