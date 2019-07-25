import React from "react";
import GamePresenter from "./gamePresenter.js";
import memoize from "memoize-one";
import shuffle from "lodash/shuffle";

export class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      nextNumber: 1
    };

    this.handleSelectedPanel = this.handleSelectedPanel.bind(this);
  }

  /** indexからパネルの合計枚数を計算する */
  getPanelNum(index) {
    return Math.pow(index + 3, 2);
  }

  /**
   * 回答となる配列を取得する
   */
  getCorrectArray(index) {
    return [...Array(this.getPanelNum(index)).keys()].map(i => i + 1);
  }

  /**
   * ボタンがクリックされた時に、ゲームを行う
   *
   */
  handleSelectedPanel(value) {
    if (
      this.getPanelNum(this.props.currentLevelIndex) === this.state.nextNumber
    ) {
      console.log("finish");

      return;
    }

    if (this.state.nextNumber === value) {
      console.log(value);
      this.setState({ nextNumber: value + 1 }, console.log);
    }
  }

  /**
   * パネルのインデックスを取得して、ランダムに並べられたパネルの配列を取得する
   */
  renderPanels = memoize(levelIndex => {
    const panels = this.getCorrectArray(levelIndex);
    return shuffle(panels);
  });

  render() {
    const panels = this.renderPanels(this.props.currentLevelIndex);
    return (
      <GamePresenter
        panelNum={this.props.currentLevelIndex}
        panels={panels}
        handleSelectedPanel={this.handleSelectedPanel}
      />
    );
  }
}
