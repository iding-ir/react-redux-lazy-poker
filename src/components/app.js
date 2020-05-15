import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "./app.css";
import Navbar from "./navbar";
import Players from "./players";
import { addPlayer, removePlayer } from "../actions/players";
import { moveStage } from "../actions/stage";
import { toggleAutoplay } from "../actions/autoplay";
import { dealPlayers, dealFlop, dealTurn, dealRiver } from "../actions/deals";

import Ranking from "./ranking";
import Deck from "./deck";
import Controls from "./controls";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {
      players,
      stage,
      autoplay,
      addPlayer,
      removePlayer,
      moveStage,
      toggleAutoplay,
    } = this.props;

    return (
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>

        <div className="app-controls">
          <Controls
            stage={stage}
            autoplay={autoplay}
            onDeal={moveStage}
            onAutoplay={toggleAutoplay}
          />
        </div>

        <div className="app-ranking">
          <Ranking players={players} />
        </div>

        <div className="app-deck"></div>

        <div className="app-players">
          <Players
            players={players}
            addPlayer={addPlayer}
            removePlayer={removePlayer}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
  stage: state.stage,
  autoplay: state.autoplay,
  deals: state.deals,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPlayer,
      removePlayer,
      moveStage,
      toggleAutoplay,
      dealPlayers,
      dealFlop,
      dealTurn,
      dealRiver,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
