import React, { Component } from "react";
import "./css/wheel.css";
class Wheel extends Component {
  render() {
    return (
      <div className="wheel-container">
        <div className="wheel-ui">
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
