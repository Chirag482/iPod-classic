import React, { Component } from "react";

import Screen from "./Screen";
import Wheel from "./Wheel";

class Case extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      menuIndex: 1,
    };
    this.controlWheelRotation = this.controlWheelRotation.bind(this);
    this.controlCenterButton = this.controlCenterButton.bind(this);
    this.controlMenuButton = this.controlMenuButton.bind(this);
  }
  controlWheelRotation(e) {
    if (e.detail.distanceFromOrigin !== 0) {
      console.log(e);
      var temp = Math.floor(Math.abs(e.detail.angle) / 15);
      this.setState({
        activeIndex: (this.state.activeIndex + temp) % 4,
      });
    }
    console.log(this.state.activeIndex);
  }
  controlCenterButton(e) {
    if (this.state.menuIndex < 2) {
      this.setState({
        menuIndex: this.state.menuIndex + 1,
      });
    }
  }
  controlMenuButton(e) {
    if (this.state.menuIndex > 0) {
      this.setState({
        menuIndex: this.state.menuIndex - 1,
      });
    }
  }
  render() {
    return (
      <div className="case" style={styles.case}>
        <Screen
          activeIndex={this.state.activeIndex}
          menuIndex={this.state.menuIndex}
        />
        <Wheel
          controlWheelRotation={this.controlWheelRotation}
          controlCenterButton={this.controlCenterButton}
          controlMenuButton={this.controlMenuButton}
        />
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
