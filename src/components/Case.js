import React, { Component } from "react";

import Screen from "./Screen";
import Wheel from "./Wheel";

/*importing songs urls*/
import song1 from "../static/songs/BlackWhite.mp3";
import song2 from "../static/songs/ChannaVeSufna.mp3";
import song3 from "../static/songs/GallanTeriaQismat.mp3";
import song4 from "../static/songs/Luna.mp3";

/*importing songs images*/
import songImg1 from "../static/songsimg/Luna.jpg";
import songImg2 from "../static/songsimg/Channa-Ve-Sufna.jpg";
import songImg3 from "../static/songsimg/Gallan-Teria-Qismat.jpg";
import songImg4 from "../static/songsimg/Luna.jpg";

import "../css/commonUsed.css";
class Case extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      menuIndex: 0,
      songsUrl: [song1, song2, song3, song4],
      songsName: ["Black and White", "Channa Ve", "Gallan Teriya", "Luna"],
      songImgUrl: [songImg1, songImg2, songImg3, songImg4],
      allSongsActiveIndex: 0,
      musicMenuActiveIndex: null,
      audio: new Audio(song1),
      isPlaying: false,
      nowPlayingIndex: null,
      settingsMenuActiveIndex: null,
      themeMenuActiveIndex: null,
      themeColor: "grey",
    };
    this.angle = 0;
    this.controlWheelRotation = this.controlWheelRotation.bind(this);
    this.controlCenterButton = this.controlCenterButton.bind(this);
    this.controlMenuButton = this.controlMenuButton.bind(this);
    this.playPauseToggle = this.playPauseToggle.bind(this);
    this.setSong = this.setSong.bind(this);
    this.changeActiveIndex = this.changeActiveIndex.bind(this);
    this.seekSongReverse = this.seekSongReverse.bind(this);
    this.seekSongForward = this.seekSongForward.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  setTheme() {
    const { themeColor, themeMenuActiveIndex } = this.state;
    if (themeMenuActiveIndex === 0) {
      this.setState({
        themeColor: "gold",
      });
    } else if (themeMenuActiveIndex === 1) {
      this.setState({
        themeColor: "grey",
      });
    } else if (themeMenuActiveIndex === 2) {
      this.setState({
        themeColor: "rosybrown",
      });
    } else if (themeMenuActiveIndex === 3) {
      this.setState({
        themeColor: "red",
      });
    }
    console.log(this.state.themeColor);
  }
  controlWheelRotation(e) {
    const {
      menuIndex,
      activeIndex,
      musicMenuActiveIndex,
      themeMenuActiveIndex,
      settingsMenuActiveIndex,
    } = this.state;

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
    } else if (menuIndex === 2 && activeIndex === 3) {
      if (temp === -1 && this.state.settingsMenuActiveIndex === 0) {
        this.setState({
          settingsMenuActiveIndex: 3,
        });
      } else {
        this.setState({
          settingsMenuActiveIndex:
            (this.state.settingsMenuActiveIndex + temp) % 4,
        });
      }
    } else if (menuIndex === 3 && settingsMenuActiveIndex === 0) {
      if (temp === -1 && this.state.themeMenuActiveIndex === 0) {
        this.setState({
          themeMenuActiveIndex: 3,
        });
      } else {
        this.setState({
          themeMenuActiveIndex: (this.state.themeMenuActiveIndex + temp) % 4,
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
    console.log(menuIndex, this.state.themeMenuActiveIndex);
    if (menuIndex === 3 && this.state.themeMenuActiveIndex !== null) {
      this.setTheme();
      return;
    }
    if (menuIndex === 4) {
      this.playPauseToggle();
      return;
    }
    /*In game component*/
    if (menuIndex === 2 && activeIndex === 2) {
      return;
    }
    if (menuIndex === 3) {
      if (musicMenuActiveIndex !== 0) {
        return;
      }
    }
    if (menuIndex === 1 && activeIndex === 1) {
      this.setState({
        menuIndex: this.state.menuIndex + 1,
        musicMenuActiveIndex: 0,
      });
      return;
    }
    if (menuIndex === 1 && activeIndex === 3) {
      this.setState({
        menuIndex: this.state.menuIndex + 1,
        settingsMenuActiveIndex: 0,
        themeMenuActiveIndex: 0,
      });
    }
    this.setState({
      menuIndex: this.state.menuIndex + 1,
    });
  }
  controlMenuButton(e) {
    if (this.state.menuIndex === 2) {
      this.setState({
        menuIndex: 1,
        musicMenuActiveIndex: null,
        settingsMenuActiveIndex: null,
        themeMenuActiveIndex: null,
      });
      return;
    }
    if (this.state.menuIndex > 0) {
      this.setState({
        menuIndex: this.state.menuIndex - 1,
      });
    }
  }
  playPauseToggle() {
    if (this.state.menuIndex === 0) {
      console.log("unlock first");
      //notification to be added
    } else {
      if (this.state.isPlaying) {
        this.state.audio.pause();
        this.setState({
          isPlaying: !this.state.isPlaying,
        });
      } else {
        this.setState(
          {
            isPlaying: !this.state.isPlaying,
            nowPlayingIndex: this.state.allSongsActiveIndex,
          },
          () => {
            this.state.audio.play();
          }
        );
      }
    }

    return;
  }
  seekSongReverse(e) {
    if (this.state.menuIndex === 0) {
      console.log("unlock first");
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let playingSongIndex = this.state.nowPlayingIndex;
      if (playingSongIndex === 0) {
        playingSongIndex = this.state.songsUrl.length - 1;
      } else {
        playingSongIndex--;
      }
      this.setState(
        {
          nowPlayingIndex: playingSongIndex,
          audio: new Audio(this.state.songsUrl[playingSongIndex]),
          allSongsActiveIndex: playingSongIndex,
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }
  }
  seekSongForward(e) {
    if (this.state.menuIndex === 0) {
      console.log("unlock first");
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let playingSongIndex = this.state.nowPlayingIndex;
      if (playingSongIndex === this.state.songsUrl.length - 1) {
        playingSongIndex = 0;
      } else {
        playingSongIndex++;
      }
      this.setState(
        {
          nowPlayingIndex: playingSongIndex,
          audio: new Audio(this.state.songsUrl[playingSongIndex]),
          allSongsActiveIndex: playingSongIndex,
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  }
  setSong() {
    if (this.state.nowPlayingIndex !== this.state.allSongsActiveIndex) {
      this.state.audio.pause();

      this.setState(
        {
          audio: new Audio(this.state.songsUrl[this.state.allSongsActiveIndex]),
          isPlaying: true,
          nowPlayingIndex: this.state.allSongsActiveIndex,
        },
        () => {
          this.state.audio.play();
        }
      );
    }
    this.setState({
      menuIndex: 4,
    });
  }
  changeActiveIndex() {
    this.setState({
      activeIndex: 1,
      musicMenuActiveIndex: this.state.allSongsActiveIndex,
      settingsMenuActiveIndex: null,
      themeMenuActiveIndex: null,
    });
  }
  render() {
    return (
      <div className="case" style={{ backgroundColor: this.state.themeColor }}>
        <Screen
          activeIndex={this.state.activeIndex}
          menuIndex={this.state.menuIndex}
          musicMenuActiveIndex={this.state.musicMenuActiveIndex}
          songsName={this.state.songsName}
          allSongsActiveIndex={this.state.allSongsActiveIndex}
          songImgUrl={this.state.songImgUrl}
          audio={this.state.audio}
          setSong={this.setSong}
          nowPlayingIndex={this.state.nowPlayingIndex}
          changeActiveIndex={this.changeActiveIndex}
          isPlaying={this.state.isPlaying}
          settingsMenuActiveIndex={this.state.settingsMenuActiveIndex}
          themeMenuActiveIndex={this.state.themeMenuActiveIndex}
        />
        <Wheel
          controlWheelRotation={this.controlWheelRotation}
          controlCenterButton={this.controlCenterButton}
          controlMenuButton={this.controlMenuButton}
          playPauseToggle={this.playPauseToggle}
          seekSongReverse={this.seekSongReverse}
          seekSongForward={this.seekSongForward}
          themeColor={this.state.themeColor}
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
