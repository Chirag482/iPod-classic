import React from "react";

import backgroundImageUrl from "../static/images/kamANS.jpg";
function LockScreen() {
  const today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  return (
    <div style={styles.lockscreen}>
      <div style={styles.time}>{time}</div>
      <div style={styles.info}>Press center button to Unlock!</div>
    </div>
  );
}

const styles = {
  lockscreen: {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "contain",
    height: 224,
    width: "100%",
    position: "relative",
  },
  time: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    left: 112,
  },
  info: {
    backgroundColor: "#E3F2FD",
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
};
export default LockScreen;
