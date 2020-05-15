import React, { Component } from "react";

import "./card.css";

class Card extends Component {
  state = {};
  render() {
    let { number, spot, highlight } = this.props.card
      ? this.props.card
      : { number: "", spot: "none", highlight: false };

    const cardIcon = "cards-icon-" + spot;
    const cardClass = "cards-card" + this.getSide();

    return (
      <React.Fragment>
        <div className={cardClass} data-highlight={highlight}>
          <div>{number}</div>
          <div className={cardIcon}></div>
          <div>{number}</div>
          <div className="cards-back">
            <img src="/assets/images/card.png" alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }

  getSide = () => {
    return this.props.card === null ? "" : " cards-visible";
  };
}

export default Card;
