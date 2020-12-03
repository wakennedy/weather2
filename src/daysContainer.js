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
      <th>{info.date}</th>
    ));
  }
  renderMaxTemps() {
    const { forecastInfo } = this.props;
    return forecastInfo.forecast.forecastday.map((info) => (
      <th>{info.day.maxtemp_f}</th>
    ));
  }
  renderMinTemps() {
    const { forecastInfo } = this.props;
    return forecastInfo.forecast.forecastday.map((info) => (
      <th>{info.day.mintemp_f}</th>
    ));
  }
  render() {
    return (
      <Fragment>
        <div>Day Container</div>
        <br />
        {/* <div>{this.renderInfo()}</div> */}
        <br />
        <table>
          <tr>
            <th>Days</th>
            {this.renderDays()}
          </tr>
          <tr>
            <th>High Temp</th>
            {this.renderMaxTemps()}
          </tr>
          <tr>
            <th>Low Temp</th>
            {this.renderMinTemps()}
          </tr>
        </table>
      </Fragment>
    );
  }
}
