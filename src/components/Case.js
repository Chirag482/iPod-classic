import React, { Component } from "react";

import Screen from "./Screen";
import Wheel from "./Wheel";

/*importing songs urls*/
import song1 from "../static/songs/BlackWhite.mp3";
import song2 from "../static/songs/ChannaVeSufna.mp3";
import song3 from "../static/songs/GallanTeriaQismat.mp3";
import song4 from "../static/songs/Luna.mp3";
import song5 from "../static/songs/RedRose.mp3";

/*importing songs images*/
import songImg1 from "../static/songsimg/Luna.jpg";
import songImg2 from "../static/songsimg/Channa-Ve-Sufna.jpg";
import songImg3 from "../static/songsimg/Gallan-Teria-Qismat.jpg";
import songImg4 from "../static/songsimg/Luna.jpg";
import songImg5 from "../static/songsimg/redRose.jpg";

class Case extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 1,
      menuIndex: 1,
      songsUrl: [song1, song2, song3, song4, song5],
      songsName: [
        "Black and White",
        "Channa Ve",
        "Gallan Teria",
        "Luna",
        "Red Rose",
      ],
      songImgUrl: [songImg1, songImg2, songImg3, songImg4, songImg5],
      allSongsActiveIndex: 0,
      musicMenuActiveIndex: 0,
    };
    this.angle = 0;
    this.controlWheelRotation = this.controlWheelRotation.bind(this);
    this.controlCenterButton = this.controlCenterButton.bind(this);
    this.controlMenuButton = this.controlMenuButton.bind(this);
  }
  controlWheelRotation(e) {
    const { menuIndex, activeIndex, musicMenuActiveIndex } = this.state;

    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    var temp = 0;
    if (Math.abs(this.angle - e.detail.angle) > 15) {
      temp = e.detail.angle < this.angle ? 1 : -1;
      this.angle = Math.abs(e.detail.angle);
    }
    if (menuIndex === 1) {
      if (temp === -1 && this.state.activeIndex === 0) {
        this.setState({
          activeIndex: 3,
        });
      } else {
        this.setState({
          activeIndex: (this.state.activeIndex + temp) % 4,
        });
      }
    } else if (menuIndex === 2 && activeIndex === 1) {
      if (temp === -1 && this.state.musicMenuActiveIndex === 0) {
        this.setState({
          musicMenuActiveIndex: 3,
        });
      } else {
        this.setState({
          musicMenuActiveIndex: (this.state.musicMenuActiveIndex + temp) % 4,
        });
      }
    } else if (menuIndex === 3 && musicMenuActiveIndex === 0) {
      if (temp === -1 && this.state.allSongsActiveIndex === 0) {
        this.setState({
          allSongsActiveIndex: this.state.songsName.length - 1,
        });
      } else {
        this.setState({
          allSongsActiveIndex:
            (this.state.allSongsActiveIndex + temp) %
            this.state.songsName.length,
        });
      }
    }
  }
  controlCenterButton(e) {
    const { activeIndex, menuIndex, musicMenuActiveIndex } = this.state;
    /*In game component*/
    if (menuIndex === 2 && activeIndex === 2) {
      return;
    }
    if (menuIndex === 3) {
      if (musicMenuActiveIndex !== 0) {
        return;
      }
    }
    this.setState({
      menuIndex: this.state.menuIndex + 1,
    });
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
          musicMenuActiveIndex={this.state.musicMenuActiveIndex}
          songsName={this.state.songsName}
          allSongsActiveIndex={this.state.allSongsActiveIndex}
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
