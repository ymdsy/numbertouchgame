import React from "react";
import { TimerPresenter } from "./timerPresenter.js";

export class TimerContainer extends React.Component {
  render() {
    return (
      <>
        <TimerPresenter value={this.props.value.toFixed(3)} />
        <button onClick={this.props.onGameStart}>start</button>
        <button onClick={this.props.onRestartGame}>retry</button>
      </>
    );
  }
}
