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
   * ボタンがクリックされた時に、ゲームを行う
   *
   */
  handleSelectedPanel(value) {
    if (
      this.getPanelNum(this.props.currentLevelIndex) === this.state.nextNumber
    ) {
      this.props.onGameStop();
      return;
    }

    if (this.state.nextNumber === value) {
      this.setState({ nextNumber: value + 1 });
    }
  }

  /**
   * パネルのインデックスを取得して、ランダムに並べられたパネルの配列を取得する
   */
  renderPanels = memoize(levelIndex => {
    const panels = [...Array(this.getPanelNum(levelIndex)).keys()].map(
      i => i + 1
    );
    return shuffle(panels);
  });

  /**
   * パネル数が変更されたときにnextNumを初期化する
   */
  render() {
    const panels = this.renderPanels(this.props.currentLevelIndex);
    if (!this.props.isGameStart) {
      return <div />;
    }

    if (this.props.isGameFinished) {
      return (
        <div>
          Game finished!! <br />
          Please select Level.
        </div>
      );
    }

    return (
      <GamePresenter
        panelNum={this.props.currentLevelIndex}
        panels={panels}
        handleSelectedPanel={this.handleSelectedPanel}
      />
    );
  }
}
