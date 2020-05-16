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
import { refreshDealer, dealPlayer, dealTable } from "../actions/cards";
import {
  NUMBER_OF_DEFAULT_PLAYERS,
  NUMBER_OF_CARDS_PER_PLAYER,
  NUMBER_OF_CARDS_FOR_FLOP,
  NUMBER_OF_CARDS_FOR_TURN,
  NUMBER_OF_CARDS_FOR_RIVER,
} from "../configs";

import Ranking from "./ranking";
import Deck from "./deck";
import Controls from "./controls";

class App extends Component {
  componentDidMount() {
    const { addPlayer, refreshDealer } = this.props;

    refreshDealer();

    for (let i = 1; i <= NUMBER_OF_DEFAULT_PLAYERS; i++) {
      addPlayer();
    }
  }

  render() {
    const {
      cards,
      players,
      stage,
      autoplay,
      addPlayer,
      removePlayer,
      moveStage,
      toggleAutoplay,
      refreshDealer,
      dealPlayer,
      dealTable,
    } = this.props;

    const onDeal = () => {
      switch (stage.slug) {
        case "new-round":
          Object.values(players).forEach((player) => {
            for (let i = 1; i <= NUMBER_OF_CARDS_PER_PLAYER; i++) {
              dealPlayer(player.id);
            }
          });

          break;
        case "preflop":
          for (let i = 1; i <= NUMBER_OF_CARDS_FOR_FLOP; i++) {
            dealTable();
          }

          break;
        case "flop":
          for (let i = 1; i <= NUMBER_OF_CARDS_FOR_TURN; i++) {
            dealTable();
          }

          break;
        case "turn":
          for (let i = 1; i <= NUMBER_OF_CARDS_FOR_RIVER; i++) {
            dealTable();
          }

          break;
        case "river":
          break;
        case "result":
          refreshDealer();

          break;
        default:
          return;
      }

      moveStage();
    };

    return (
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>

        <div className="app-controls">
          <Controls
            stage={stage}
            autoplay={autoplay}
            onDeal={onDeal}
            onAutoplay={toggleAutoplay}
          />
        </div>

        <div className="app-ranking">
          <Ranking players={players} />
        </div>

        <div className="app-deck">
          <Deck cards={cards} />
        </div>

        <div className="app-players">
          <Players
            cards={cards}
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
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPlayer,
      removePlayer,
      moveStage,
      toggleAutoplay,
      refreshDealer,
      dealPlayer,
      dealTable,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
