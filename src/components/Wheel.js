import React, { Component } from "react";
import ZingTouch from "zingtouch";

import "../css/wheel.css";

class Wheel extends Component {
  //Bind components with zingtouch to control wheel rotation by 15deg
  componentDidMount() {
    var wheel = document.getElementById("wheel");
    var activeRegion = ZingTouch.Region(wheel);

    const menu = document.getElementById("menu");
    const forward = document.getElementById("forward");
    const reverse = document.getElementById("reverse");
    const playPauseToggleButton = document.getElementById("play-pause");

    const {
      controlWheelRotation,
      controlMenuButton,
      playPauseToggle,
      seekSongReverse,
      seekSongForward,
    } = this.props;

    activeRegion.bind(wheel, "rotate", (e) => {
      controlWheelRotation(e);
    });

    activeRegion.bind(menu, "tap", (e) => {
      controlMenuButton(e);
    });
    activeRegion.bind(playPauseToggleButton, "tap", (e) => {
      playPauseToggle();
    });

    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInputs: 1,
      tolerance: 1,
    });
    activeRegion.bind(forward, longTapGesture, (e) => {
      seekSongForward(e);
    });
    activeRegion.bind(reverse, longTapGesture, (e) => {
      seekSongReverse(e);
    });
  }
  render() {
    const { controlCenterButton } = this.props;
    return (
      <div className="wheel-container">
        <div className="wheel-ui" id="wheel">
          <div className="control" id="menu">
            Menu
          </div>
          <div className="control" id="forward">
            <i className="fas fa-fast-forward"></i>
          </div>
          <div className="control" id="play-pause">
            <div>
              <i className="fas fa-play"></i>
              <i className="fas fa-pause"></i>
            </div>
          </div>
          <div className="control" id="reverse">
            <i className="fas fa-fast-backward"></i>
          </div>
        </div>
        <div className="blank" id="blank" onClick={controlCenterButton}></div>
      </div>
    );
  }
}
export default Wheel;
