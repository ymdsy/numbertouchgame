import React from "react";
import "./App.css";

import { CalcTime } from "./timer/timerContainer";
import { LevelContainer } from "./levelSelector/levelContainer";

const LEVEL_LIST = ["かんたん", 2, 3];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: true,
      currentLevelIndex: 1
    };

    this.setLevel = this.setLevel.bind(this);
  }

  setLevel(index) {
    this.setState({ currentLevelIndex: index });
  }

  render() {
    return (
      <div>
        <LevelContainer
          onSetLevel={this.setLevel}
          levelList={LEVEL_LIST}
          currentLevelIndex={this.state.currentLevelIndex}
        />
        <CalcTime isGameStart={this.state.isGameStart} />
      </div>
    );
  }
}

export default App;
