import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/cardcontainer/CardContainer';
import ControlForm from './components/controlform/ControlForm';

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: []
    }
  }

  componentDidMount(){
    let url = 'http://localhost:3001/api/v1/reservations';
    fetch(url)
      .then(response=> response.json())
      .then(result=> this.setState({reservations: result}))
      .catch(error => console.log(error.message));
  }

  addResy =(res)=>{
    let url = 'http://localhost:3001/api/v1/reservations';
    let data = {
      name: res.name,
      date: res.date,
      time: res.time,
      number: parseInt(res.number),
      id: Date.now()
    }
    let init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let currState = this.state.reservations;

    fetch(url, init)
      .then(response=> response.json())
      .then(result=> currState.push(result))
      .then(currState=> this.setState({currState}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ControlForm add={this.addResy} /> 
        <CardContainer resy={this.state.reservations} />
      </div>
    )
  }
}

export default App;
