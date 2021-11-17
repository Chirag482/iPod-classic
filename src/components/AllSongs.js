import React, { Component, createRef } from "react";

import "../css/commonUsed.css";

class AllSongs extends Component {
  constructor(props) {
    super(props);
    this.songRef = createRef(null);
  }
  executeScroll = () => {
    this.songRef.current.scrollIntoView();
  };
  componentDidUpdate() {
    this.executeScroll();
  }
  render() {
    const { songsName, allSongsActiveIndex } = this.props;
    return (
      <div>
        <div className="innerMenuHeading">All Songs</div>
        <div>
          <ul type="none">
            {songsName.map((data, index) => {
              return allSongsActiveIndex === index ? (
                <li key={index} className="active" ref={this.songRef}>
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
