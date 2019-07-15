import React from "react";
import PropTypes from "prop-types";

function LevelSelector(props) {
  return (
    <button className="levelSelector" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

LevelSelector.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number
};

export default LevelSelector;
