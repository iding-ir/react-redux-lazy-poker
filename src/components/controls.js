import React, { Component } from "react";
import M from "materialize-css";

import "./controls.css";

class Controls extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let logsModal = document.querySelector("#logs-modal");

      M.Modal.init(logsModal);

      let restartModal = document.querySelector("#restart-modal");

      M.Modal.init(restartModal);
    });
  }

  render() {
    let { onDeal } = this.props;

    let { icon, button } = this.props.stage;

    return (
      <div className="controls">
        <div className="controls-deal">
          <button
            id="controls-deal"
            className="waves-effect waves-light btn-large pink"
            onClick={onDeal}
          >
            <i className="material-icons left">{icon}</i>
            {button}
          </button>

          <button
            id="controls-autoplay"
            className="waves-effect waves-light btn-large pink darken-2"
          ></button>
        </div>

        <div className="controls-spacer"></div>

        <div className="controls-restart">
          <button
            id="controls-restart"
            className="waves-effect btn-large blue"
            onClick={() => {
              let element = document.querySelector("#restart-modal");

              M.Modal.getInstance(element).open();
            }}
          >
            <i className="material-icons">refresh</i>
          </button>

          <div id="restart-modal" className="modal">
            <div className="modal-header">
              <h5>Restart</h5>
            </div>

            <div className="modal-content">
              <p>Are you sure you want to restart the game?</p>
            </div>

            <div className="modal-footer">
              <button className="modal-close waves-effect btn-flat">
                Restart
              </button>

              <button className="modal-close waves-effect btn-flat">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
