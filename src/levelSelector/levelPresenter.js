import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./levelPresenter.css";

export function LevelPresenter(props) {
  const currentLevel = props.levelList[props.currentLevelIndex];
  return (
    <>
      {props.levelList.map((level, index) => (
        <button
          className={classNames("levelSelector", {
            levelSelector_active: level === currentLevel
          })}
          disabled={props.isButtonDisabled}
          key={level}
          onClick={() => {
            props.onSelect(index);
          }}
        >
          {level}
        </button>
      ))}
    </>
  );
}

LevelPresenter.propTypes = {
  onSelect: PropTypes.func, //引数にインデックスが渡される関数
  levelList: PropTypes.array.isRequired
};
