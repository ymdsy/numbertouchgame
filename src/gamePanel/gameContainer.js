import React from "react";
import GamePresenter from "./gamePresenter.js";

export class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      nextNumber: 1
    };

    this.handleSelectedPanel = this.handleSelectedPanel.bind(this);
  }

  /**
   * ボタンがクリックされた時に、ゲームを行う
   *
   */
  handleSelectedPanel(value) {
    console.log("nextNum", this.state.nextNumber);
    console.log("value", value);

    if (
      this.state.nextNumber === this.props.panels.length &&
      this.props.panels.length === value
    ) {
      this.setState({ nextNumber: 1 });
      this.props.onGameStop();
      return;
    }

    if (this.state.nextNumber === value) {
      this.setState({ nextNumber: value + 1 });
    }
  }

  /**
   * パネル数が変更されたときにnextNumを初期化する
   */
  render() {
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
        panels={this.props.panels}
        handleSelectedPanel={this.handleSelectedPanel}
      />
    );
  }
}
