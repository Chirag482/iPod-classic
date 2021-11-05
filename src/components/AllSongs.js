import React, { Component } from "react";

import "../css/commonUsed.css";

class AllSongs extends Component {
  render() {
    const { songsName, allSongsActiveIndex } = this.props;
    return (
      <div>
        <div className="innerMenuHeading">All Songs</div>
        <div>
          <ul type="none">
            {songsName.map((data, index) => {
              return allSongsActiveIndex === index ? (
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

export default AllSongs;
