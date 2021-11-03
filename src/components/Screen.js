import React, { Component } from "react";
import "./Navbar";
import Navbar from "./Navbar";
import Display from "./Dsiplay";
class Screen extends Component {
  render() {
    return (
      <div className="screen" style={styles.screen}>
        <Navbar />
        <Display />
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
