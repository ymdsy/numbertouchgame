import React from "react";
import LevelSelector from "./levelPresenter.js";

export class LevelContainer extends React.Component {
  render() {
    return (
      <div>
        <LevelSelector
          levelList={this.props.levelList}
          currentLevelIndex={this.props.currentLevelIndex}
          onSelect={index => {
            this.props.onSetLevel(index);
          }}
        />
      </div>
    );
  }
}
