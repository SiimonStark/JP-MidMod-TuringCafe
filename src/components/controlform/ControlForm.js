import React, {Component} from 'react';
import './ControlForm.css';

class ControlForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange=(e)=>{
    let {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    console.log('FormState: ', this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
          type="text" />
        <input 
          name="date"
          placeholder="Date (mm/dd)"
          onChange={this.handleChange}
          value={this.state.date}
          type="text" />
        <input 
          name="time"
          placeholder="Time hh:mm am/pm"
          onChange={this.handleChange}
          value={this.state.time}
          type="text" />
        <input 
          name="number"
          placeholder="Number of guests"
          onChange={this.handleChange}
          value={this.state.number}
          type="number" />
        <input type="submit" value="Make Reservation" />
      </form>
    )
  }
}

export default ControlForm;