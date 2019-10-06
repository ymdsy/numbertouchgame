import React from "react";
import LevelPresenter from "./levelPresenter.js";

export class LevelContainer extends React.Component {
  render() {
    return (
      <div>
        <LevelPresenter
          levelList={this.props.levelList}
          currentLevelIndex={this.props.currentLevelIndex}
          onSelect={index => {
            this.props.onSetLevel(index);
          }}
          isButtonDisabled={this.props.isGameStart}
        />
      </div>
    );
  }
}
