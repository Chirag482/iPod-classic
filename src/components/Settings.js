import React, { Component } from "react";

import "../css/commonUsed.css";

class Settings extends Component {
  render() {
    const { settingsMenuActiveIndex } = this.props;
    const settingsMenu = ["Theme", "Wheel Colour", "Wallpaper", "Other"];
    return (
      <div>
        <div className="innerMenuHeading">Settings</div>
        <div>
          <ul type="none">
            {settingsMenu.map((data, index) => {
              return settingsMenuActiveIndex === index ? (
                <li key={index} className="active">
                  {data} &nbsp;<i class="fas fa-chevron-right"></i>
                </li>
              ) : (
                <li key={index}>{data}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Settings;
