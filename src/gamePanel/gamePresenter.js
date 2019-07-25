import React from "react";
import PropTypes from "prop-types";

function GamePresenter(props) {
  return (
    <div>
      {props.panels.map(panel => (
        <button
          onClick={() => {
            props.handleSelectedPanel(panel);
          }}
        >
          {panel}
        </button>
      ))}
    </div>
  );
}

GamePresenter.propTypes = {
  panelNum: PropTypes.number
};

export default GamePresenter;
