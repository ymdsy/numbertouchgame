import React from "react";
import GamePresenter from "./gamePresenter.js";
// import memoize from "memoize-one";
export class GameContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      panels: []
    };
  }

  /** indexからパネルの合計枚数を計算する */
  getPanelNum(index) {
    return Math.pow(index + 3, 2);
  }

  /**
   * パネルの配列を生成する。
   *
   */
  createPanels(levelIndex) {
    const panelNum = Math.pow(levelIndex + 3, 2);
    const panels = [...Array(panelNum).keys()].map(i => i + 1);
    return this.shuffleArray(panels);
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

  render() {
    // 過去の枚数と変化が起きたときのみパネルを生成する
    if (
      this.state.panels.length !==
      this.getPanelNum(this.props.currentLevelIndex)
    ) {
      this.setState({
        panels: this.createPanels(this.props.currentLevelIndex)
      });
    }

    return (
      <GamePresenter
        panelNum={this.props.currentLevelIndex}
        panels={this.state.panels}
      />
    );
  }
}
