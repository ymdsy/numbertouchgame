import React from "react";
import { TimerPresenter } from "./timerPresenter.js";

export class TimerContainer extends React.Component {
  render() {
    return (
      <>
        <TimerPresenter value={this.props.value.toFixed(3)} />
      </>
    );
  }
}
