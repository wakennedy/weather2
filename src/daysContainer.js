import React, { Component, Fragment } from "react";
import Day from "./day.js";

export default class DaysContainer extends Component {
  renderDays = () => {
    const { forecastInfo } = this.props;
    return forecastInfo.forecast.forecastday.map((day) => <Day info={day} />);
  };
  render() {
    return (
      <Fragment>
        <div>Day Container</div>
        <br />
        <div>{this.renderDays()}</div>
        <br />
      </Fragment>
    );
  }
}
