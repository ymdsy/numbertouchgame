import React from "react";
import "./App.css";
import shuffle from "lodash/shuffle";

import { TimerContainer } from "./timer/timerContainer";
import { LevelContainer } from "./levelSelector/levelContainer";
import { GameContainer } from "./gamePanel/gameContainer.js";

const LEVEL_LIST = ["かんたん", 2, 3, 4];
const INIT_LEVEL_INDEX = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: false,
      isGameFinished: false,
      currentLevelIndex: INIT_LEVEL_INDEX,
      panels: [],
      timerId: 0,
      timerValue: 0
    };

    this.setLevel = this.setLevel.bind(this);
    this.startGame = this.startGame.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  setLevel(index) {
    this.setState({ currentLevelIndex: index });
  }

  startGame() {
    // ゲーム中に再度startボタンを押されたときに重複してタイマーを作成しないため
    if (this.state.isGameStart === true || this.state.timerId !== 0) {
      return;
    }

    const id = setInterval(() => {
      this.setState(state => ({ timerValue: state.timerValue + 0.05 }));
    }, 50);

    this.setState({
      isGameStart: true,
      panels: this.getShuffledPanels(this.state.currentLevelIndex),
      timerId: id
    });
  }

  finishGame() {
    clearInterval(this.state.timerId);
    this.setState({ isGameFinished: true, timerId: 0 });
  }

  restartGame() {
    clearInterval(this.state.timerId);
    this.setState({
      isGameStart: false,
      isGameFinished: false,
      timerValue: 0,
      timerId: 0
    });
  }

  /**
   * ランダムに並べられたパネルの配列を取得する
   */
  getShuffledPanels(levelIndex) {
    // indexからパネルの合計枚数を計算する
    const panelNum = Math.pow(levelIndex + 3, 2);
    const panels = [...Array(panelNum).keys()].map(i => i + 1);
    return shuffle(panels);
  }

  render() {
    return (
      <>
        <LevelContainer
          onSetLevel={this.setLevel}
          levelList={LEVEL_LIST}
          currentLevelIndex={this.state.currentLevelIndex}
          isGameStart={this.state.isGameStart}
        />
        <TimerContainer
          onRestartGame={this.restartGame}
          onGameStart={this.startGame}
          value={this.state.timerValue}
        />
        <GameContainer
          // currentLevelIndexが変更されたときにComponentを初期化する
          key={this.state.currentLevelIndex}
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          panels={this.state.panels}
          onGameStop={this.finishGame}
        />
      </>
    );
  }
}

export default App;
