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
        if (number <= 0|| number > 99){
            return this.setState({
                numberOfEvents:'',
                errorText: 'Error. Please enter a number between 0 & 99',
        });
        } else {
        this.setState({
            numberOfEvents: number,
            errorText: ''
        });
    }
        this.props.updateEventCount(event.target.value)
    }

    render(){
        let events = this.state.events;
        return(
            <div className="NumberOfEvents">
                <input
                type="text"
                className="numberEvents"
                value={events}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;