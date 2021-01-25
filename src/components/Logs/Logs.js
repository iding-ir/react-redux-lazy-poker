import React, { Component } from "react";
import M from "materialize-css";

class Logs extends Component {
  constructor() {
    super();

    this.modalRef = React.createRef();
  }

  componentDidMount() {
    M.Modal.init(this.modalRef.current);
  }

  render() {
    const { logs } = this.props;

    return (
      <>
        <button
          className="waves-effect btn-large blue"
          onClick={() => {
            M.Modal.getInstance(this.modalRef.current).open();
          }}
          disabled={!logs.length}
        >
          <i className="material-icons">filter_none</i>
        </button>

        <span
          className="logs-counter badge new pink"
          data-badge-caption=""
          style={{ display: !logs.length ? "none" : "block" }}
        >
          {logs.length}
        </span>

        <div ref={this.modalRef} className="modal">
          <div className="modal-header">
            <h5>Logs</h5>
          </div>

          <div className="modal-content">
            <ul className="collection">
              {logs.map((log, index) => (
                <li className="collection-item logs-item" key={index}>
                  <i className="material-icons left blue-text">{log.icon}</i>

                  <div>{log.text}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-footer">
            <button className="modal-close waves-effect btn-flat">Close</button>
          </div>
        </div>
      </>
    );
  }
}

export default Logs;
