import React from "react";

import "./controls.css";
import Dealer from "./dealer";
import Restart from "./restart";
import Logs from "./logs";

const Controls = (props) => {
  const { stage, autoplay, deal, toggleAutoplay, restart, logs } = props;

  return (
    <div className="controls">
      <div className="controls-deal">
        <Dealer
          stage={stage}
          autoplay={autoplay}
          deal={deal}
          toggleAutoplay={toggleAutoplay}
        />
      </div>

      <div className="controls-spacer"></div>

      <div className="controls-restart">
        <Restart restart={restart} />
      </div>

      <div className="controls-logs">
        <Logs logs={logs} />
      </div>
    </div>
  );
};

export default Controls;
