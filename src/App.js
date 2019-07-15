import React from "react";
import "./App.css";

import { CalcTime } from "./timer/timerContainer";
import { LevelContainer } from "./levelSelector/levelContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: true,
      level: 1
    };
    this.setLevel = this.setLevel.bind(this);
  }

  setLevel(level) {
    console.log(level);
    this.setState({ level: level });
  }

  render() {
    return (
      <div>
        <LevelContainer level={this.state.level} onSetLevel={this.setLevel} />
        <CalcTime isGameStart={this.state.isGameStart} />
      </div>
    );
  }
}

export default App;
