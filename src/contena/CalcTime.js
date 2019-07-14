import React from "react";
import { Timer } from "../presentetional/Timer.js";

export class CalcTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: 0,
      value: 0.0
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    const id = setInterval(() => {
      this.setState(state => {
        return { value: state.value + 0.05 };
      });
    }, 50);

    this.setState({ timerId: id });
  }

  stop() {
    clearInterval(this.state.timerId);
  }

  clear() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <div>
        <Timer value={this.state.value} />
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}
