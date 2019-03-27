import React, { Component } from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form'; 
import Weather from './components/weather'; 

const Api_Key = "d23a6c9aed4c3b87a3a9c742234ba605"

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    const response = await api_call.json();
    console.log(response); 
  }

  render() {
    return (
      <div className="App">
          <Titles />
          <Form loadWeather={this.getWeather}/>
          <Weather />
      </div>
    );
  }
}

export default App;
