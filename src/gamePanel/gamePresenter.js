import React from "react";
import PropTypes from "prop-types";
import "./gamePresenter.css";

function GamePresenter(props) {
  return (
    <div>
      <table className="gamePresenterTable">
        <tbody>
          {convertArr(props.panels).map((row, i) => (
            <tr key={row}>
              {row.map((item, j) => (
                <td key={item}>
                  <button
                    className="numberPanel"
                    onClick={() => {
                      props.handleSelectedPanel(item);
                    }}
                  >
                    {item}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 *　パネル用の配列を2次元配列に変換する。

 *  @param {ボタンのパネル用の配列。} panels
 */
function convertArr(panels) {
  const edgeLength = Math.round(Math.sqrt(panels.length));

  // 格納用の２次元配列を初期化する。
  const initArr = Array.from(new Array(edgeLength), () =>
    new Array(edgeLength).fill(0)
  );

  return panels.reduce((tmpArr, panel, i) => {
    const rowIndex = Math.floor(i / edgeLength);
    const colIndex = i % edgeLength;
    tmpArr[rowIndex][colIndex] = panel;
    return tmpArr;
  }, initArr);
}

GamePresenter.propTypes = {
  panelNum: PropTypes.number
};

export default GamePresenter;
