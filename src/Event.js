import React, { Component } from "react";
import { mockData } from "./mock-data";


class Event extends Component {
    state = {
      showHideDetails: false
    };
    
      toggleButton = () => {
        this.setState({
          showHideDetails: this.state.showHideDetails === true ? false : true
      })
  }; 


      render() {
        let event = this.props.event;
    
        return (
            <ul className="event">
              <li className="Summary">{event.summary}</li>
              <li className="Location">{event.location}</li>
              <li className="Date">start: {event.start.dateTime}</li>

              {this.state.showHideDetails && (
                <div className='Details'>
                  <p className='Description'>{event.description}</p>
                </div>
              )}

              <button className='details-btn' onClick={this.toggleButton}>
                {!this.state.showHideDetails ? 'Show Details' : 'Hide Details'}
              </button>
            </ul>
        )
      }
    }

export default Event;