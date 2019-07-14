import React from "react";
import "./App.css";
// import { isNoop } from "@babel/types";

import { CalcTime } from "./timer/timerContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameStart: true
    };
  }
  render() {
    return <CalcTime isGameStart={this.state.isGameStart} />;
  }
}

export default App;
