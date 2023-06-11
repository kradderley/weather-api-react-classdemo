import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather";

class App extends Component {
  state = { location: "london" };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=00fd3601a5ec4393d8fc6091e478e2f8`
    );
    this.setState({ weather: data });
  }

  onSearchInput = (e) => {
    this.setState = { searchInput: e.target.value };
  };

  render() {
    const { weather } = this.state;

    if (!weather) return <p>Loading ...</p>;
    
    return <Weather list={weather.list} onSearchInput={this.onSearchInput} />;
  }
}

export default App;
