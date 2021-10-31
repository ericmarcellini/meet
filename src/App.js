import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations } from './api';
import './nprogress.css'; 
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

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
 

    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return {city, number};
      })
      return data;
    };

   render() {
     const { locations, numberOfEvents, events } = this.state;
     return (
       <div className="App">
         <h1>Meet App</h1>
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <NumberOfEvents updateEventNumber={(e) => this.updateEventNumber(e)} numberOfEvents={numberOfEvents} />
         <div className="data-vis-wrapper">
           <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              width={800}
              height={400}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
            </ResponsiveContainer>
        </div>
         <EventList events={this.state.events}/>
       </div>
     );
   }
 }
 
 export default App;