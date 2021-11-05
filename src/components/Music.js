import React, { Component } from "react";

import "../css/commonUsed.css";

class Music extends Component {
  render() {
    const { musicMenuActiveIndex } = this.props;
    const musicMenu = ["All songs", "favourites", "Artists", "Albums"];
    return (
      <div>
        <div className="innerMenuHeading">Music</div>
        <div>
          <ul type="none">
            {musicMenu.map((data, index) => {
              return musicMenuActiveIndex === index ? (
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
export default Music;
