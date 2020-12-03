import React, { Component, Fragment } from "react";
import "./App.css";
import DaysContainer from "./daysContainer";
import JSONPretty from "react-json-pretty";
import Day from "./day";
const BASEURL = "http://api.weatherapi.com/v1";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const LOCATION = "98115";

class App extends Component {
  state = {
    currentWeather: [],
    forecastWeather: {
      alert: {},
      current: {},
      forecast: {
        forecastday: [
          {
            date: "",
            day: {
              avgtemp_f: 0,
              daily_chance_of_rain: "",
              maxtemp_f: 0,
              mintemp_f: 0,
              totalprecip_in: 0,
            },
            hour: [
              {
                feelslike_f: 0,
                temp_f: 0,
                recip_in: 0,
              },
            ],
          },
        ],
      },
      location: {},
    },
    object: "",
  };
  async fetchweather() {
    const response = await fetch(
      `${BASEURL}/forecast.json?key=${API_KEY}&q=${LOCATION}&days=3`
    );
    const weather = await response.json();
    const update = await this.setState({ object: weather }, () => {
      return weather;
    });
    return update;
  }
  async stateUpdate() {
    const data = await this.fetchweather();
    const update = await this.setState({ forecastWeather: data });
    return update;
  }
  async componentDidMount() {
    await this.stateUpdate();
  }
  render() {
    return (
      <Fragment>
        {/* <div>{this.state.forecastWeather.location.name}</div> */}
        <br />
        {/* <DaysContainer /> */}
        {/* {console.log(this.state.object)} */}
        <JSONPretty id="json-pretty" data={this.state.object}></JSONPretty>
        {/* <div className="a">{this.state.object}</div> */}
        {/* <DaysContainer forecastInfo={this.state.forecastWeather} /> */}
      </Fragment>
    );
  }
}

export default App;
