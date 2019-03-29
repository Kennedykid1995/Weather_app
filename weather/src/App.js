import React, { Component } from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form'; 
import Weather from './components/weather'; 

const Api_Key = "d23a6c9aed4c3b87a3a9c742234ba605"

class App extends Component {
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    }
  }  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`)
    const response = await api_call.json();
    console.log(response); 
    if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: '',
    })
  }else{
    this.setState({
      error:"Please enter the values..."
    })
  }
  }

  render() {
    return (
      <div>
          <Form loadWeather={this.getWeather}/>
          <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
