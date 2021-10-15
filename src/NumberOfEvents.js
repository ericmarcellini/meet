import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        locations: [],
        errors: ''
      }

      updateEventNumber = (eventCount) => {
        this.setState({
          numberOfEvents: eventCount
        });
    
        this.props.updateEventNumber(eventCount)
      };

    render(){
        return(
            <div className="NumberOfEvents">
                <h1>Number of Events</h1>
                <input
                type="number"
                className="numberEvents"
                value={this.state.numberOfEvents}
                onChange={(e)=> this.updateEventNumber(e.target.value)}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;