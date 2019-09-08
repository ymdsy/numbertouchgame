import React from "react";
import LevelSelector from "./levelPresenter.js";

export class LevelContainer extends React.Component {
  isButtonDisabled() {
    return this.props.isGameStart ? true : false;
  }

  render() {
    return (
      <div>
        <LevelSelector
          levelList={this.props.levelList}
          currentLevelIndex={this.props.currentLevelIndex}
          onSelect={index => {
            this.props.onSetLevel(index);
          }}
          isButtonDisabled={this.isButtonDisabled()}
        />
      </div>
    );
  }
}
