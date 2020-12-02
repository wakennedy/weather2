import React, { Component, Fragment } from "react";

export default class Day extends Component {
  render() {
    const { info } = this.props;
    if (!info) {
      return <Fragment>NOTHING</Fragment>;
    }
    return (
      <Fragment>
        <div>Date: {this.props.info.date}</div>
        <div>Avgerage Temperature: {this.props.info.day.avgtemp_f}</div>
      </Fragment>
    );
  }
}
