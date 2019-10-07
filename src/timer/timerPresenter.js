import React from "react";

export function TimerPresenter(props) {
  return <div>{props.value.toFixed(3)}</div>;
}
