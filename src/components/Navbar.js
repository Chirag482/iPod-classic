import React from "react";

function Navbar(props) {
  const today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  const { menuIndex } = props;
  return (
    <div className="navbar" style={styles.navbar}>
      <div className="label">Ipod</div>
      {menuIndex !== 0 && <div className="time">{time}</div>}
      <div className="charging">
        <i class="fas fa-play"></i>
        {/*<i class="fas fa-pause"></i> */}
        &nbsp;
        <i class="fas fa-battery-three-quarters"></i>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#E3F2FD",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
};
export default Navbar;
