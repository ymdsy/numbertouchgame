import React from "react";
import "./App.css";

import { CalcTime } from "./timer/timerContainer";
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

  startGame(flag) {
    this.setState({ isGameStart: flag });
  }

  finishGame(flag) {
    this.setState({ isGameFinished: flag });
  }

  render() {
    return (
      <div>
        <LevelContainer
          onSetLevel={this.setLevel}
          levelList={LEVEL_LIST}
          currentLevelIndex={this.state.currentLevelIndex}
        />
        <CalcTime
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          onGameStart={() => {
            this.startGame(true);
          }}
          onGameStop={() => {
            this.finishGame(true);
          }}
        />
        <GameContainer
          currentLevelIndex={this.state.currentLevelIndex}
          // currentLevelIndexが変更されたときにComponentを初期化する
          key={this.state.currentLevelIndex}
          onGameStop={() => {
            this.finishGame(true);
          }}
        />
      </div>
    );
  }
}

export default App;
