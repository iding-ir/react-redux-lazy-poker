import React from "react";

import "./Controls.scss";
import Dealer from "../Dealer/Dealer";
import Restart from "../Restart/Restart";
import Logs from "../Logs/Logs";

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
