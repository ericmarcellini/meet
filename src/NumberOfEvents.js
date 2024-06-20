import React, { Component } from "react";
import { ErrorAlert } from './Alert';
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    locations: [],
    errorText: ''
  }
  /**
   * Updates the number of events based on user input.
   * If the input is less than 0, it sets the number of events to 0
   * and displays an error message. Otherwise, it updates the number
   * of events with the input value and clears any error message.
   * Also calls the parent's updateEventNumber method.
   **/
  
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
