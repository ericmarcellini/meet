import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css'; 


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    defaultLocation: 'all'
  }
 
  componentDidMount() {
   this.mounted = true;
   getEvents().then((events) => {
     if (this.mounted) {
     this.setState({ 
       events: events.slice(0, this.state.numberOfEvents),
       locations: extractLocations(events) 
       });
      }
    })
    .catch(error => {
     console.log(error);
   })
 }
 
 componentWillUnmount() {
   this.mounted = false;
 }
 
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ? events : 
     events.filter((event) => event.location === location);
     locationEvents = locationEvents.slice(0, eventCount)
      this.setState({
        events: locationEvents,
        defaultLocation: location
      });
    });
  }
 
  updateEventNumber = (eventCount) => {
    this.setState({
      numberOfEvents: eventCount
    });
    const { defaultLocation } = this.state;
    this.updateEvents(defaultLocation, eventCount);
    };
 
   render() {
     const { numberOfEvents } = this.state;
     return (
       <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <NumberOfEvents updateEventNumber={(e) => this.updateEventNumber(e)} numberOfEvents={numberOfEvents} />
         <EventList events={this.state.events}/>
       </div>
     );
   }
 }
 
 export default App;