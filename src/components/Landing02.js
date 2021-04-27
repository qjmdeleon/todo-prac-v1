import React, { Component } from "react";

export default class Landing02 extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 0 };
  }

  //SCRATCHING MY HEAD OVER A SIMPLE PROBLEM!!!!

  tick() {
    if (this.state.seconds < 100) {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  //This one calls the function every, 30multimillion seconds
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 30);
  }

  render() {
    return (
      <section className="landing-02">
        <div className="landing-02-container">
          <div className="text-set-02">
            <h1>Beat the slack off.</h1>
            <h2>{this.state.seconds} %</h2>
            <p>
              Achieve a 100% task completion with seamless
              <br /> integration to your workflow - a non-intrusive
              <br /> reminder system is on place. Keeping you in-check
              <br /> after setup. Your preference is priority.
            </p>
          </div>
          <div className="image-set-02"></div>
        </div>
      </section>
    );
  }
}
