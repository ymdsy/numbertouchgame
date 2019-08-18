import React from "react";
import PropTypes from "prop-types";

function GamePresenter(props) {
  return (
    <div className="gamePresenterBlock" style={props.style}>
      {props.panels.map(panel => (
        <button
          className="gamePresenter"
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
