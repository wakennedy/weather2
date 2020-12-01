import React, { Component, Fragment } from "react";
import "./App.css";
const BASEURL = "http://api.weatherapi.com/v1";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const LOCATION = "98115";

class App extends Component {
  state = {
    currentWeather: [],
    forecastWeather: {},
  };
  async fetchweather() {
    const response = await fetch(
      `${BASEURL}/forecast.json?key=${API_KEY}&q=${LOCATION}&days=3`
    );
    const weather = await response.json();
    return weather;
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
        <div>TEST</div>
      </Fragment>
    );
  }
}

export default App;
