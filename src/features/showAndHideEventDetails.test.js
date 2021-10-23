import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import App from '../App'
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showAndHideEventDetails.feature');
let event = mockData[0];

defineFeature (feature, test => {
    test ('An event is collapsed by default.', 
    ({ given, 
        when, 
        then }) => {
    	let EventWrapper, AppWrapper;

        given('an event is collapsed', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
            const EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    	});
        
    	when('user has click the city', () => {
            EventWrapper = shallow(<Event event={event} />);
            expect(EventWrapper.state('showHideDetails')).toBe(false);
            EventWrapper.find('.details-btn').simulate('click');
    	});

    	then('user has to be able to exit or see more details', () => {
            expect(EventWrapper.state('showHideDetails')).toBe(true);
    	});
    });

  
    test ('User can expand an event to see its details',
     ({ given, 
        when, 
        then }) => {
    	let EventWrapper;

        given('user selected the city and the event list is shown', () => {
            EventWrapper = shallow(<Event event={event} />);
            expect(EventWrapper.state('showHideDetails')).toBe(false);
    	});

    	when('the user clicks on an event', () => {
            EventWrapper.find('.details-btn').simulate('click');
    	});

    	then('the element should expand', () => {
            expect(EventWrapper.state('showHideDetails')).toBe(true);
    	});
    });
  
  
    test ('user can collapse an event to hide its details',
     ({ given,
        when, 
        then }) => {
        let EventWrapper;

        given('the event is expanded', () => {
            EventWrapper = shallow(<Event event={event} />);
            EventWrapper.find('.details-btn').simulate('click');
            expect(EventWrapper.state('showHideDetails')).toBe(true);
  
      });
       when('the user clicks on the event', () => {
        EventWrapper.find('.details-btn').simulate('click');
      });
  
      then('the event should be collapsed', () => {
        expect(EventWrapper.state('showHideDetails')).toBe(false);
      });
   
    });
  });