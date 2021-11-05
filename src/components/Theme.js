import React, { Component } from "react";

class Theme extends Component {
  render() {
    const musicMenu = ["Gold", "Grey", "Rose Gold", "Red"];
    const { themeMenuActiveIndex } = this.props;
    return (
      <div>
        <div className="innerMenuHeading">Theme</div>
        <div>
          <ul type="none">
            {musicMenu.map((data, index) => {
              return themeMenuActiveIndex === index ? (
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

export default Theme;
