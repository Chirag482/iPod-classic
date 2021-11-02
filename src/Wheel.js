import React, { Component } from "react";
import ZingTouch from "zingtouch";
import "./css/wheel.css";

class Wheel extends Component {
  constructor() {
    super();
    this.state = {
      index: 1,
    };
  }

  //Bind components with zingtouch to control wheel rotation by 15deg
  componentDidMount() {
    var wheel = document.getElementById("wheel");
    var activeRegion = ZingTouch.Region(wheel);

    const menu = document.getElementById("menu");
    const forward = document.getElementById("forward");
    const reverse = document.getElementById("reverse");
    const playPauseToggle = document.getElementById("play-pause");
    activeRegion.bind(wheel, "rotate", (e) => {
      if (e.detail.distanceFromOrigin !== 0) {
        var temp = Math.floor(Math.abs(e.detail.distanceFromOrigin) / 15);
        this.setState({
          index: (this.state.index + temp) % 4,
        });
      }
      console.log(this.state.index);
    });

    activeRegion.bind(menu, "tap", (e) => {
      console.log("Menu button clicked");
    });
    activeRegion.bind(playPauseToggle, "tap", (e) => {
      console.log("Play-pause button clicked");
    });

    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInputs: 1,
      tolerance: 1,
    });
    activeRegion.bind(forward, longTapGesture, (e) => {
      console.log("forward button clicked");
    });
    activeRegion.bind(reverse, longTapGesture, (e) => {
      console.log("backward button pressed");
    });
  }
  render() {
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
        <div className="blank"></div>
      </div>
    );
  }
}
export default Wheel;
