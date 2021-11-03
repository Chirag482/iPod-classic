import React, { Component } from "react";

/*components*/
import Navbar from "./Navbar";
import Display from "./Dsiplay";
import Game from "./Game";
import LockScreen from "./LockScreen";

class Screen extends Component {
  render() {
    const { activeIndex, menuIndex } = this.props;
    return (
      <div className="screen" style={styles.screen}>
        <Navbar menuIndex={menuIndex} />
        {menuIndex === 0 && <LockScreen />}
        {menuIndex === 1 && <Display activeIndex={activeIndex} />}
        {menuIndex === 2 && activeIndex === 2 && <Game />}
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
