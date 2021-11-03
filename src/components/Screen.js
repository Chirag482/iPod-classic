import React, { Component } from "react";

/*components*/
import Navbar from "./Navbar";
import Display from "./Dsiplay";
import Game from "./Game";

class Screen extends Component {
  constructor() {
    super();
    this.state = {
      showDisplay: true,
      showGame: false,
    };
  }
  render() {
    const { showDisplay, showGame } = this.state;
    return (
      <div className="screen" style={styles.screen}>
        <Navbar />
        {showDisplay && <Display activeIndex={this.props.activeIndex} />}
        {showGame && <Game />}
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
