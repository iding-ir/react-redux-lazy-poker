import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import pokersolver from "pokersolver";

import "./App.css";
import {
  addPlayer,
  removePlayer,
  removePlayers,
  changeName,
  checkName,
  givePoints,
} from "../actions/players";
import { moveStage, setStage, startGame, endGame } from "../actions/game";
import { toggleAutoplay, turnAutoplayOff } from "../actions/autoplay";
import {
  refreshDealer,
  dealPlayer,
  dealTable,
  highlight,
} from "../actions/cards";
import { addLog, clearLogs } from "../actions/logs";
import {
  STAGE_NEW_ROUND,
  STAGE_PREFLOP,
  STAGE_FLOP,
  STAGE_TURN,
  STAGE_RIVER,
  STAGE_RESULT,
} from "../constants";
import {
  NUMBER_OF_DEFAULT_PLAYERS,
  NUMBER_OF_CARDS_PER_PLAYER,
  NUMBER_OF_CARDS_FOR_FLOP,
  NUMBER_OF_CARDS_FOR_TURN,
  NUMBER_OF_CARDS_FOR_RIVER,
  AUTOPLAY_DELAY_MS,
  TOAST_DURATION,
  HANDPOINTS,
} from "../configs";
import { repeat } from "../utils/repeat";
import Navbar from "./Navbar";
import Players from "./Players";
import Ranking from "./Ranking";
import Deck from "./Deck";
import Controls from "./Controls";

class App extends Component {
  componentDidMount() {
    this.restart();
  }

  componentDidUpdate() {
    this.listenToAutoplay();
  }

  render() {
    const {
      cards,
      logs,
      players,
      game,
      autoplay,
      addPlayer,
      removePlayer,
      changeName,
      checkName,
      toggleAutoplay,
    } = this.props;

    return (
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>

        <div className="app-controls">
          <Controls
            stage={game.stage}
            autoplay={autoplay}
            logs={logs}
            deal={this.deal}
            toggleAutoplay={toggleAutoplay}
            restart={this.restart}
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
            gameStarted={game.started}
            addPlayer={addPlayer}
            removePlayer={removePlayer}
            changeName={changeName}
            checkName={checkName}
          />
        </div>
      </div>
    );
  }

  deal = () => {
    const {
      players,
      game,
      moveStage,
      startGame,
      endGame,
      refreshDealer,
      dealPlayer,
      dealTable,
    } = this.props;

    const { slug } = game.stage;

    switch (slug) {
      case STAGE_NEW_ROUND:
        startGame();

        Object.values(players).forEach((player) => {
          repeat(NUMBER_OF_CARDS_PER_PLAYER, () => {
            dealPlayer(player.id);
          });
        });

        break;
      case STAGE_PREFLOP:
        repeat(NUMBER_OF_CARDS_FOR_FLOP, dealTable);

        break;
      case STAGE_FLOP:
        repeat(NUMBER_OF_CARDS_FOR_TURN, dealTable);

        break;
      case STAGE_TURN:
        repeat(NUMBER_OF_CARDS_FOR_RIVER, dealTable);

        break;
      case STAGE_RIVER:
        this.calculate();

        break;
      case STAGE_RESULT:
        endGame();

        refreshDealer();

        break;
      default:
        return;
    }

    moveStage();
  };

  calculate = () => {
    const { players, cards, highlight, givePoints, addLog } = this.props;
    const Hand = pokersolver.Hand;
    const hands = [];

    Object.values(players).forEach((player, index) => {
      const final = [...cards.table, ...cards.players[player.id]].map(
        (card) => card.rank.value + card.suit
      );

      hands[index] = Hand.solve(final);
      hands[index].id = player.id;
    });

    const winners = Hand.winners(hands);

    winners.forEach((winner) => {
      const points = HANDPOINTS.filter(
        (handpoint) => handpoint.hand === winner.name
      )[0].points;

      givePoints(winner.id, points);

      const text = `${players[winner.id].name} won with ${
        winner.descr
      }. +${points} points`;

      M.toast({ html: text, displayLength: TOAST_DURATION });

      addLog({
        text,
        icon: "insert_comment",
      });

      winner.cards.forEach((card) => {
        highlight(card);
      });
    });
  };

  restart = () => {
    const {
      addPlayer,
      setStage,
      removePlayers,
      refreshDealer,
      clearLogs,
      turnAutoplayOff,
    } = this.props;

    refreshDealer();

    setStage(STAGE_NEW_ROUND);

    clearLogs();

    removePlayers();

    turnAutoplayOff();

    repeat(NUMBER_OF_DEFAULT_PLAYERS, addPlayer);
  };

  listenToAutoplay = () => {
    const { autoplay } = this.props;

    if (autoplay) {
      clearInterval(this.interval);

      this.interval = setTimeout(() => {
        this.deal();
      }, AUTOPLAY_DELAY_MS);
    }
  };
}

const mapStateToProps = (state) => ({
  players: state.players,
  game: state.game,
  autoplay: state.autoplay,
  cards: state.cards,
  logs: state.logs,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPlayer,
      removePlayer,
      removePlayers,
      changeName,
      checkName,
      moveStage,
      setStage,
      startGame,
      endGame,
      toggleAutoplay,
      turnAutoplayOff,
      refreshDealer,
      dealPlayer,
      dealTable,
      highlight,
      givePoints,
      addLog,
      clearLogs,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
