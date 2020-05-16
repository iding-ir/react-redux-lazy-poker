import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "./app.css";
import Navbar from "./navbar";
import Players from "./players";
import {
  addPlayer,
  removePlayer,
  changeName,
  checkName,
} from "../actions/players";
import { moveStage, startGame, endGame } from "../actions/game";
import { toggleAutoplay } from "../actions/autoplay";
import { refreshDealer, dealPlayer, dealTable } from "../actions/cards";
import {
  NUMBER_OF_DEFAULT_PLAYERS,
  NUMBER_OF_CARDS_PER_PLAYER,
  NUMBER_OF_CARDS_FOR_FLOP,
  NUMBER_OF_CARDS_FOR_TURN,
  NUMBER_OF_CARDS_FOR_RIVER,
} from "../configs";
import { repeat } from "../utils/repeat";
import Ranking from "./ranking";
import Deck from "./deck";
import Controls from "./controls";

class App extends Component {
  componentDidMount() {
    const { addPlayer, refreshDealer } = this.props;

    refreshDealer();

    repeat(NUMBER_OF_DEFAULT_PLAYERS, addPlayer);
  }

  render() {
    const {
      cards,
      players,
      gameStarted,
      stage,
      autoplay,
      addPlayer,
      removePlayer,
      changeName,
      checkName,
      moveStage,
      startGame,
      endGame,
      toggleAutoplay,
      refreshDealer,
      dealPlayer,
      dealTable,
    } = this.props;

    const onDeal = () => {
      switch (stage.slug) {
        case "new-round":
          startGame();

          Object.values(players).forEach((player) => {
            repeat(NUMBER_OF_CARDS_PER_PLAYER, () => {
              dealPlayer(player.id);
            });
          });

          break;
        case "preflop":
          repeat(NUMBER_OF_CARDS_FOR_FLOP, dealTable);

          break;
        case "flop":
          repeat(NUMBER_OF_CARDS_FOR_TURN, dealTable);

          break;
        case "turn":
          repeat(NUMBER_OF_CARDS_FOR_RIVER, dealTable);

          break;
        case "river":
          endGame();

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
            gameStarted={gameStarted}
            addPlayer={addPlayer}
            removePlayer={removePlayer}
            changeName={changeName}
            checkName={checkName}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
  stage: state.game.stage,
  gameStarted: state.game.started,
  autoplay: state.autoplay,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPlayer,
      removePlayer,
      changeName,
      checkName,
      moveStage,
      startGame,
      endGame,
      toggleAutoplay,
      refreshDealer,
      dealPlayer,
      dealTable,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
