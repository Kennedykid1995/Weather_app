import React, { Component } from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form'; 
import Weather from './components/weather'; 

class App extends Component {
  render() {
    return (
      <div className="App">
          <Titles />
          <Form />
          <Weather />
      </div>
    );
  }
}

export default App;
