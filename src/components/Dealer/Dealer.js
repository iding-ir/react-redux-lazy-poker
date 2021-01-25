import React from "react";

const Dealer = (props) => {
  const { stage, autoplay, deal, toggleAutoplay } = props;
  const { icon, button } = stage;
  const autoplayIcon = autoplay ? "pause" : "play_arrow";

  return (
    <>
      <button
        id="controls-deal"
        className="waves-effect waves-light btn-large pink"
        onClick={deal}
        disabled={autoplay}
      >
        <i className="material-icons left">{icon}</i>
        {button}
      </button>

      <button
        id="controls-autoplay"
        className="waves-effect waves-light btn-large pink darken-2"
        onClick={toggleAutoplay}
      >
        <i className="material-icons left">{autoplayIcon}</i>
      </button>
    </>
  );
};

export default Dealer;
