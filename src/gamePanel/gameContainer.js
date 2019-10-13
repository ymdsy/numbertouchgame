import React from "react";
import GamePresenter from "./gamePresenter.js";
import NextAnswerPresenter from "./nextAnswerPresenter.js";

export class GameContainer extends React.Component {
  render() {
    if (!this.props.isGameStart) {
      return null;
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
      <div>
        <NextAnswerPresenter value={this.props.nextAnswer} />
        <GamePresenter
          panels={this.props.panels}
          handleSelectedPanel={this.props.handleSelectedPanel}
        />
      </div>
    );
  }
}
