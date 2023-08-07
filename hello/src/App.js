// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name= 'Tony' heroName='Ironman' />
        <Greet name= 'Steve' heroName='Captain'/>
        <Greet name= 'Nathasha' heroName='Black Widow' />
      </div>
    )
  }
}

export default App;