import React, { Component } from "react";
import { mockData } from "./mock-data";

class NumberOfEvents extends Component {
    state = {
        events: 32,
      }

    render(){
        let events = this.state.events;
        return(
            <div className="NumberOfEvents">
                <input
                type="text"
                classname="numberEvents"
                value={events}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;