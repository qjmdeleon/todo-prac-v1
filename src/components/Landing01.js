import React, { Component } from "react";

export default class Landing01 extends Component {
  render() {
    return (
      <section className="landing-01">
        <div className="landing-01-container">
          <div className="text-set-01">
            <h1>
              Reward yourself with the <br />
              Simplest productivity <br />
              tool.
            </h1>
            <p>
              Score success and finish tasks everyday by skyrocketing
              <br /> your productiveness. Make Immerse Todo a part of your
              <br /> daily routine check-up.
            </p>
            <button className="button-01">
              {/* Replace with react-router later */}
              Sign Me Up
            </button>
          </div>
          <div className="image-set-01"></div>
        </div>
      </section>
    );
  }
}
