import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App'
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, Thirty-Two is the default number', 
    ({ given, 
        when, 
        then }) => {

        given('the user has not specified a number', () => {
            let AppWrapper, NumberOfEventsWrapper;
            given('Page it is showing event', () => {
                AppWrapper = mount(<App />);
                AppWrapper.update();
                const EventListWrapper = shallow(<EventList events={mockData} />);
                expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });

        when('the user searches', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} eventNumber={32} />);
			const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('numberEvents').prop('value')).toBe(number); 
        });

        then ('the default number of events should load', () => {
            const EventListWrapper = shallow(<EventList events={mockData} />);
			expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
        });
    });

    test('User can change the number of events they want to see', 
    ({ given, 
        when, 
        then }) => {

    	let AppWrapper, NumberOfEventsWrapper;
		given('the user opens the app', () => {
			AppWrapper = mount(<App />);
			AppWrapper.update();
			const EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });

        when('the user specifies the number of events', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} eventNumber={32} />)
			const eventObject = { target: { value: 5 } };
        NumberOfEventsWrapper.find('.numberEvents').simulate('change', eventObject);
        });

        then('that same amount of events should display', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);
        });
    });
});