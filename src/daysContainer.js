import React, { Component, Fragment } from "react";
import Day from "./day.js";

export default class DaysContainer extends Component {
  renderInfo = () => {
    const { forecastInfo } = this.props;
    return forecastInfo.forecast.forecastday.map((day) => <Day info={day} />);
  };
  renderDays() {
    const { forecastInfo } = this.props;
    return forecastInfo.forecast.forecastday.map((info) => (
      <th>{info.day.date}</th>
    ));
  }
  render() {
    return (
      <Fragment>
        <div>Day Container</div>
        <br />
        <div>{this.renderInfo()}</div>
        <br />
        <table>
          <tr>
            <th>Days</th>
            {this.renderDays()}
          </tr>
          <tr />
          Temps
          <th>0</th>
          <th>1</th>
          <th>2</th>
        </table>
      </Fragment>
    );
  }
}
