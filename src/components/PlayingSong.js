import React, { Component } from "react";

class PlayingSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
    };
    this.intervalId = "";
  }

  //updating current music time
  componentDidMount() {
    const { audio, setSong, changeActiveIndex } = this.props;
    if (changeActiveIndex !== undefined) {
      changeActiveIndex();
    }
    setSong();
    this.setState({
      currentTime: audio.currentTime,
    });

    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: this.props.audio.currentTime,
      });
    }, 100);
  }
  //removing interval
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { songName, songImgUrl, audio } = this.props;
    var currentTimeRender =
      Math.floor(this.state.currentTime / 60) +
      ":" +
      Math.floor(this.state.currentTime % 60);
    var durationRender =
      Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
    const percentageComplete = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
      backgroundColor: "green",
      height: "6px",
    };
    if (Math.floor(this.state.currentTime % 60 < 10)) {
      currentTimeRender =
        Math.floor(this.state.currentTime / 60) +
        ":0" +
        Math.floor(this.state.currentTime % 60);
    }
    return (
      <div style={styles.backgroundColor}>
        <div
          style={{
            backgroundImage: `url(${songImgUrl})`,
            height: 180,
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <div style={styles.songHeading}>{songName}</div>
          <div style={styles.timeline}>
            {currentTimeRender}
            <div style={styles.timelineDiv}>
              <div style={percentageComplete}></div>
            </div>
            {durationRender}
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  songHeading: {
    width: "fit-content",
    margin: "auto",
    fontSize: "1.2rem",
    fontWeight: "bolder",
    position: "relative",
    top: 175,
  },
  backgroundColor: {
    backgroundColor: "#E3F2FD",
    height: 224,
  },
  timeline: {
    width: "90%",
    margin: "auto",
    display: "flex",
    position: "relative",
    top: 170,
  },
  timelineDiv: {
    width: "90%",
    height: 6,
    border: "1px solid black",
    backgroundColor: "grey",
    position: "relative",
    top: 8,
    marginRight: 5,
    marginLeft: 5,
  },
};
export default PlayingSong;
