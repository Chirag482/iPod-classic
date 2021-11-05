import React, { Component } from "react";

/*components*/
import Navbar from "./Navbar";
import Display from "./Dsiplay";
import Game from "./Game";
import LockScreen from "./LockScreen";
import Music from "./Music";
import AllSongs from "./AllSongs";
import NoData from "./NoData";
import PlayingSong from "./PlayingSong";
import Settings from "./Settings";
import Theme from "./Theme";

class Screen extends Component {
  render() {
    const {
      activeIndex,
      menuIndex,
      musicMenuActiveIndex,
      songsName,
      allSongsActiveIndex,
      songImgUrl,
      audio,
      setSong,
      changeActiveIndex,
      isPlaying,
      settingsMenuActiveIndex,
      themeMenuActiveIndex,
    } = this.props;
    return (
      <div className="screen" style={styles.screen}>
        <Navbar menuIndex={menuIndex} isPlaying={isPlaying} />
        {menuIndex === 0 && <LockScreen />}
        {menuIndex === 1 && <Display activeIndex={activeIndex} />}
        {menuIndex === 2 && activeIndex === 0 && (
          <PlayingSong
            songName={songsName[allSongsActiveIndex]}
            songImgUrl={songImgUrl[allSongsActiveIndex]}
            audio={audio}
            setSong={setSong}
            changeActiveIndex={changeActiveIndex}
          />
        )}
        {menuIndex === 2 && activeIndex === 1 && (
          <Music musicMenuActiveIndex={musicMenuActiveIndex} />
        )}
        {menuIndex === 2 && activeIndex === 2 && <Game />}
        {menuIndex === 2 && activeIndex === 3 && (
          <Settings settingsMenuActiveIndex={settingsMenuActiveIndex} />
        )}
        {/* Music Menu */}
        {menuIndex === 3 && musicMenuActiveIndex === 0 && (
          <AllSongs
            songsName={songsName}
            allSongsActiveIndex={allSongsActiveIndex}
          />
        )}
        {menuIndex === 3 && musicMenuActiveIndex === 1 && (
          <NoData data={"Favourites"} />
        )}
        {menuIndex === 3 && musicMenuActiveIndex === 2 && (
          <NoData data={"Artists"} />
        )}
        {menuIndex === 3 && musicMenuActiveIndex === 3 && (
          <NoData data={"Albums"} />
        )}

        {/* settings menu */}
        {menuIndex === 3 && settingsMenuActiveIndex === 0 && (
          <Theme themeMenuActiveIndex={themeMenuActiveIndex} />
        )}
        {menuIndex === 3 && settingsMenuActiveIndex === 1 && (
          <NoData data={"Wheel Colour"} />
        )}
        {menuIndex === 3 && settingsMenuActiveIndex === 2 && (
          <NoData data={"Wallpaper"} />
        )}
        {menuIndex === 3 && settingsMenuActiveIndex === 3 && (
          <NoData data={"Other"} />
        )}
        {/* single songs screen */}
        {menuIndex === 4 && (
          <PlayingSong
            songName={songsName[allSongsActiveIndex]}
            songImgUrl={songImgUrl[allSongsActiveIndex]}
            audio={audio}
            setSong={setSong}
          />
        )}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: 250,
    backgroundColor: "white",
    border: "2px solid black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
};

export default Screen;
