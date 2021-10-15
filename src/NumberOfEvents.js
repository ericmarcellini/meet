import React, { Component } from "react";
import { mockData } from "./mock-data";
import { getEvents, extractLocations } from './api';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        locations: [],
        errors: ''
      }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number <= 1|| number > 50){
            return this.setState({
                numberOfEvents:'',
                errorText: 'Error. Please enter a number between 1 & 50',
        });
        } else {
        this.setState({
            numberOfEvents: number,
            errorText: ''
        });
    }
    }

    render(){
        return(
            <div className="NumberOfEvents">
                <h1>Number of Events</h1>
                <input
                type="number"
                className="numberEvents"
                value={this.state.numberOfEvents}
                onChange={(e)=> this.handleInputChanged(e)}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;