import React, { Component } from "react";

export default class Landing04 extends Component {
  render() {
    return (
      <section className="landing-04">
        <div className="landing-04-container">
          <div className="text-container-04">
            <h1 className="header-04">
              Get the IMMERSE Suite in three tiny prices
            </h1>
            <p className="subheader-04">
              While to-do is free - check out all of what IMMERSE could offer
              and be at your peak-level productiveness
            </p>
          </div>
          <ul className="price-boxes-04">
            <li className="box-item">
              <h1>FREE PLAN</h1>
              <div className="features">
                <p>Todo and Budget</p>
              </div>
            </li>
            <li className="box-item">
              <h1>$7/mo</h1>
              <div className="features">
                <p>Complete Immerse Suite</p>
                <p>Cancel Anytime</p>
                <p>24/7 Support</p>
                <p>Get all future products</p>
              </div>
            </li>
            <li className="box-item">
              <h1>$5/mo</h1>
              <div className="features">
                <p>Todo, Budget, Notes</p>
                <p>Cancel anytime</p>
                <p>24/7 Support</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
