import React, { Component } from "react";

import Screen from "./Screen";
import Wheel from "./Wheel";

class Case extends Component {
  render() {
    return (
      <div className="case" style={styles.case}>
        <Screen />
        <Wheel />
      </div>
    );
  }
}

const styles = {
  case: {
    height: 520,
    width: 300,
    backgroundColor: "grey",
    margin: "auto",
    position: "relative",
    top: 60,
    border: "5px solid black",
    borderRadius: 25,
  },
};
export default Case;
