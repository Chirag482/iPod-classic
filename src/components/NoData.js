import React, { Component } from "react";

class NoData extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="innerMenuHeading">{data}</div>
        <div className="NoData">Empty!!</div>
      </div>
    );
  }
}

export default NoData;
