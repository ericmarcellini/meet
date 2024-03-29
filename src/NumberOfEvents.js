import React, { Component } from "react";
import { ErrorAlert } from './Alert';
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    locations: [],
    errorText: ''
  }

  updateEventNumber = (eventCount) => {
    if (eventCount < 0 ){
      return this.setState({
        numberOfEvents: 0,
        errorText: 'Please enter a number greater than 1'
      })

  } else { 
    this.setState({
      numberOfEvents: eventCount,
      errorText:''
    });
  }  
  this.props.updateEventNumber(eventCount)
  }

  render() {
    return (
      <div className="NumberOfEvents">
      <h4>Number of Events</h4>
        <input 
          type="number"
          className="numberEvents"
          value={this.props.numberOfEvents}
          onChange={(e) => this.updateEventNumber(e.target.value)}
        />
        <ErrorAlert text ={this.state.errorText}/>
      </div>
    )
  }
}

export default NumberOfEvents;
