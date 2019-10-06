import React from "react";
import GamePresenter from "./gamePresenter.js";

export class GameContainer extends React.Component {
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
        handleSelectedPanel={this.props.handleSelectedPanel}
      />
    );
  }
}
