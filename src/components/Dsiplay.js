import React, { Component } from "react";

/*images url for menu sideward*/
import musicUrl from "../static/images/music.jpg";
import settingsUrl from "../static/images/settings.png";
import gameUrl from "../static/images/game.jpg";
import "../css/display.css";

import nowPlayingUrl from "../static/images/music.jpg";
class Dsiplay extends Component {
  render() {
    const activeIndex = this.props.activeIndex;
    const menuItems = ["Now playing", "Music", "Games", "Settings"];

    return (
      <div className="display" style={styles.display}>
        <div className="menu" style={styles.menu}>
          <ul type="none" style={styles.ul}>
            {menuItems.map((data, index) => {
              return activeIndex === index ? (
                <li key={index} className="active" style={styles.li}>
                  {data} &nbsp;<i class="fas fa-chevron-right"></i>
                </li>
              ) : (
                <li key={index} style={styles.li}>
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="menu-img" style={styles.menuImg}>
          {activeIndex === 0 && <img src={nowPlayingUrl} alt="now playing" />}
          {activeIndex === 1 && <img src={musicUrl} alt="music" />}
          {activeIndex === 2 && <img src={gameUrl} alt="game" />}
          {activeIndex === 3 && <img src={settingsUrl} alt="settings" />}
        </div>
      </div>
    );
  }
}

const styles = {
  display: {
    display: "flex",
  },
  menu: {
    width: "50%",
    height: 222,
    margin: 0,
    backgroundColor: "#E3F2FD",
  },
  ul: {
    marginTop: 25,
    marginLeft: -40,
  },
  li: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  menuImg: {
    height: 222,
    width: "50%",
  },
};

export default Dsiplay;
