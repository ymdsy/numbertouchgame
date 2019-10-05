import React from "react";
import "./App.css";

import { TimerContainer } from "./timer/timerContainer";
import { LevelContainer } from "./levelSelector/levelContainer";
import { GameContainer } from "./gamePanel/gameContainer.js";

const LEVEL_LIST = ["かんたん", 2, 3];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: false,
      isGameFinished: false,
      currentLevelIndex: 0
    };

    this.setLevel = this.setLevel.bind(this);
  }

  setLevel(index) {
    this.setState({ currentLevelIndex: index });
  }

  startGame() {
    this.setState({ isGameStart: true });
  }

  finishGame() {
    this.setState({ isGameFinished: true });
  }

  restartGame() {
    this.setState({ isGameStart: false });
    this.setState({ isGameFinished: false });
  }

  render() {
    return (
      <div>
        <LevelContainer
          onSetLevel={this.setLevel}
          levelList={LEVEL_LIST}
          currentLevelIndex={this.state.currentLevelIndex}
          isGameStart={this.state.isGameStart}
        />
        <TimerContainer
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          onRestartGame={() => {
            this.restartGame();
          }}
          onGameStart={() => {
            this.startGame();
          }}
          onGameStop={() => {
            this.finishGame();
          }}
        />
        <GameContainer
          currentLevelIndex={this.state.currentLevelIndex}
          // currentLevelIndexが変更されたときにComponentを初期化する
          key={this.state.currentLevelIndex}
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          onGameStop={() => {
            this.finishGame(true);
          }}
        />
      </div>
    );
  }
}

export default App;
