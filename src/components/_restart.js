import React, { Component } from "react";
import M from "materialize-css";

class Restart extends Component {
  constructor() {
    super();

    this.modalRef = React.createRef();
  }

  componentDidMount() {
    M.Modal.init(this.modalRef.current);
  }

  render() {
    const { restart } = this.props;

    return (
      <>
        <button
          className="waves-effect btn-large blue"
          onClick={() => {
            M.Modal.getInstance(this.modalRef.current).open();
          }}
        >
          <i className="material-icons">refresh</i>
        </button>

        <div ref={this.modalRef} className="modal">
          <div className="modal-header">
            <h5>Restart</h5>
          </div>

          <div className="modal-content">
            <p>Are you sure you want to restart the game?</p>
          </div>

          <div className="modal-footer">
            <button
              className="modal-close waves-effect btn-flat"
              onClick={restart}
            >
              Restart
            </button>

            <button className="modal-close waves-effect btn-flat">Close</button>
          </div>
        </div>
      </>
    );
  }
}

export default Restart;
