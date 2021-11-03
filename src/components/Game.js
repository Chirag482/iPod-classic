import React, { Component } from "react";

import gameUrl from "../static/images/game.jpg";
class Game extends Component {
  render() {
    return <div style={styles.background}>Games</div>;
  }
}
const styles = {
  background: {
    backgroundImage: `url(${gameUrl})`,
    height: 224,
    width: "100%",
    backgroundSize: "contain",
    color: "white",
    fontSize: "1.8rem",
    display: "flex",
    justifyContent: "center",
  },
};
export default Game;
