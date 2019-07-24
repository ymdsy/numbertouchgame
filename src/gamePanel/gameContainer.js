import React from "react";
import GamePresenter from "./gamePresenter.js";
import memoize from "memoize-one";
import isEqual from "lodash/isEqual";

export class GameContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      correctArray: []
    };
  }

  /** indexからパネルの合計枚数を計算する */
  getPanelNum(index) {
    return Math.pow(index + 3, 2);
  }

  /**
   * 数字の配列を並び替える。
   * TODO: lodash/shuffle を使いたい。
   */
  shuffleArray(arr) {
    return arr
      .map(e => [Math.random(), e])
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(a => a[1]);
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
  onClick(value) {
    // ここに
  }

  /**
   *    パネルのインデックスを取得して、ランダムに並べられたパネルの配列を種痘する
   * 第二引数はDeepEqualをするための関数
   */
  renderPanels = memoize(levelIndex => {
    const panels = this.getCorrectArray(levelIndex);
    return this.shuffleArray(panels);
  }, isEqual);

  render() {
    const panels = this.renderPanels(this.props.currentLevelIndex);
    return (
      <GamePresenter panelNum={this.props.currentLevelIndex} panels={panels} />
    );
  }
}
