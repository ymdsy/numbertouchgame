import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./levelPresenter.css";

function LevelPresenter(props) {
  const currentLevel = props.levelList[props.currentLevelIndex];
  return (
    <div className="levelSelectorBlock">
      {props.levelList.map((level, index) => (
        <button
          disabled={props.isButtonDisabled}
          key={level}
          className={classNames("levelSelector", {
            levelSelector_active: level === currentLevel
          })}
          onClick={() => {
            props.onSelect(index);
          }}
        >
          {level}
        </button>
      ))}
    </div>
  );
}

LevelPresenter.propTypes = {
  onSelect: PropTypes.func, //引数にインデックスが渡される関数
  levelList: PropTypes.array.isRequired
};

export default LevelPresenter;
