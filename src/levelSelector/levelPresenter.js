import React from "react";
import PropTypes from "prop-types";

function LevelSelector(props) {
  return (
    <div className="levelSelectorBlock">
      {props.levelList.map((level, index) => (
        <button
          className="levelSelector"
          onClick={() => {
            props.onSelect(index);
          }}
        >
          {level}
        </button>
      ))}
      <div>現在のレベル：{props.levelList[props.currentLevelIndex]}</div>
    </div>
  );
}

LevelSelector.propTypes = {
  onSelect: PropTypes.func, //引数にインデックスが渡される関数
  levelList: PropTypes.array.isRequired
};

export default LevelSelector;
