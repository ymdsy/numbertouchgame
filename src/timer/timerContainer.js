import React from "react";
import { TimerPresenter } from "./timerPresenter.js";

export class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.0
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.clear = this.clear.bind(this);
  }

  start = isGameStart => {
    if (this.props.timerId !== 0 || !isGameStart) {
      return;
    }

    const id = setInterval(() => {
      this.setState(state => {
        return { value: state.value + 0.05 };
      });
    }, 50);

    this.props.setTimerId(id);
  };

  stop = isGameFinished => {
    if (!isGameFinished) {
      return;
    }
    clearInterval(this.props.timerId);
    this.props.clearTimerId();
  };

  clear() {
    this.setState({ value: 0 });
  }

  render() {
    this.start(this.props.isGameStart);
    this.stop(this.props.isGameFinished);
    return (
      <div>
        <TimerPresenter value={this.state.value.toFixed(3)} />
        <button
          onClick={() => {
            this.props.onGameStart();
          }}
        >
          start
        </button>
        <button
          onClick={() => {
            this.stop(true);
            this.props.onRestartGame();
            this.clear();
          }}
        >
          retry
        </button>
      </div>
    );
  }
}
