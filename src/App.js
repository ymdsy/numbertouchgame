import React from "react";
import "./App.css";
import shuffle from "lodash/shuffle";

import { TimerContainer } from "./timer/timerContainer";
import { LevelContainer } from "./levelSelector/levelContainer";
import { GameContainer } from "./gamePanel/gameContainer.js";

const LEVEL_LIST = ["かんたん", 2, 3, 7];
const INIT_LEVEL_INDEX = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: false,
      isGameFinished: false,
      currentLevelIndex: INIT_LEVEL_INDEX,
      panels: this.getShuffledPanels(INIT_LEVEL_INDEX)
    };

    this.setLevel = this.setLevel.bind(this);
  }

  setLevel(index) {
    this.setState({ currentLevelIndex: index });
  }

  startGame() {
    this.setState({
      isGameStart: true,
      panels: this.getShuffledPanels(this.state.currentLevelIndex)
    });
  }

  finishGame() {
    this.setState({ isGameFinished: true });
  }

  restartGame() {
    this.setState({ isGameStart: false });
    this.setState({ isGameFinished: false });
  }

  /**
   * ランダムに並べられたパネルの配列を取得する
   */
  getShuffledPanels(levelIndex) {
    const panels = [...Array(this.getPanelNum(levelIndex)).keys()].map(
      i => i + 1
    );
    return shuffle(panels);
  }

  /** indexからパネルの合計枚数を計算する */
  getPanelNum(index) {
    return Math.pow(index + 3, 2);
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
          // currentLevelIndexが変更されたときにComponentを初期化する
          key={this.state.currentLevelIndex}
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          panels={this.state.panels}
          onGameStop={() => {
            this.finishGame(true);
          }}
        />
      </div>
    );
  }
}

export default App;
