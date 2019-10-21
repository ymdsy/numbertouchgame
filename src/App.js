import React from "react";
import "./App.css";
import shuffle from "lodash/shuffle";

import { TimerPresenter } from "./timer/timerPresenter.js";
import { LevelPresenter } from "./levelSelector/levelPresenter";
import { GameContainer } from "./gamePanel/gameContainer.js";
import { OperatePresenter } from "./operator/operatePresenter.js";

const LEVEL_LIST = ["かんたん", 2, 3, 4];
const INIT_LEVEL_INDEX = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: false,
      isGameFinished: false,
      currentLevelIndex: INIT_LEVEL_INDEX,
      nextAnswer: 1,
      panels: [],
      startedAt: 0,
      timerId: 0,
      timerValue: 0
    };

    this.setLevel = this.setLevel.bind(this);
    this.startGame = this.startGame.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.handleSelectedPanel = this.handleSelectedPanel.bind(this);
  }

  setLevel(index) {
    this.setState({ currentLevelIndex: index });
  }

  startGame() {
    if (this.state.isGameStart === true) return;

    const id = setInterval(() => {
      const now = new Date().getTime();
      const timerValue = (now - this.state.startedAt) / 1000;
      this.setState({
        timerValue: timerValue
      });
    }, 50);

    this.setState({
      isGameStart: true,
      panels: this.getShuffledPanels(this.state.currentLevelIndex),
      timerId: id
    });
  }

  finishGame() {
    clearInterval(this.state.timerId);
    this.setState({ isGameFinished: true, timerId: 0, nextAnswer: 1 });
  }

  restartGame() {
    clearInterval(this.state.timerId);
    this.setState({
      isGameStart: false,
      isGameFinished: false,
      nextAnswer: 1,
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

  /**
   * ボタンがクリックされた時に、ゲームを行う
   */
  handleSelectedPanel(value) {
    // 不正解の場合は何もしない
    if (value !== this.state.nextAnswer) {
      return;
    }

    // ゲーム終了の場合
    if (value === this.state.panels.length) {
      this.finishGame();
      return;
    }

    this.setState({ nextAnswer: value + 1 });
  }

  render() {
    return (
      <>
        <LevelPresenter
          currentLevelIndex={this.state.currentLevelIndex}
          isButtonDisabled={this.state.isGameStart}
          levelList={LEVEL_LIST}
          onSelect={this.setLevel}
        />
        <TimerPresenter value={this.state.timerValue} />
        <OperatePresenter
          onRestartGame={this.restartGame}
          onGameStart={this.startGame}
        />
        <GameContainer
          handleSelectedPanel={this.handleSelectedPanel}
          isGameStart={this.state.isGameStart}
          isGameFinished={this.state.isGameFinished}
          nextAnswer={this.state.nextAnswer}
          panels={this.state.panels}
        />
      </>
    );
  }
}

export default App;
