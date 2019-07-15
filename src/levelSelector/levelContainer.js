import React from "react";
import LevelSelector from "./levelPresenter.js";

export class LevelContainer extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div>
        <LevelSelector
          value={1}
          onClick={() => {
            this.props.onSetLevel(1);
          }}
        />
        <LevelSelector value={2} onClick={this.props.onSetLevel} />
        <LevelSelector value={3} onClick={this.props.onSetLevel} />
        <div>現在のレベル：</div>
      </div>
    );
  }
}
