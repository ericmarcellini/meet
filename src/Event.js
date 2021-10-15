import React, { Component } from "react";
import { mockData } from "./mock-data";


class Event extends Component {
    state = {
        show: false,
      };
    
      handleButton = () => {
        this.setState((prevState) => ({ show: !prevState.show }));
      };


      render() {
        let event = this.props.event;
    
        return (
            <ul className="Event">
              <li className="Summary">{event.summary}</li>
              <li className="Location">{event.location}</li>
              <li className="Date">start: {event.start.dateTime}</li>
              {this.state.show === true && (
                <p className="Details">{event.description}</p>
              )}
              {this.state.show === false && (
                <button className="showDetails" onClick={() => this.handleButton()}>
                  Show more details
                </button>
              )}
              {this.state.show === true && (
                <button className="hideDetails" onClick={() => this.handleButton()}>
                  hide details
                </button>
              )}
            </ul>
        )
      }
    }

export default Event;