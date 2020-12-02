import React, { Component, Fragment } from "react";

export default class Day extends Component {
  render() {
    return (
      <Fragment>
        Individual Day
        <div>{this.props.info.date}</div>
      </Fragment>
    );
  }
}
