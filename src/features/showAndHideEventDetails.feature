Feature: show hide an event's details

Scenario: An event is collapsed by default.
Given an event is collapsed
When user has click the city
Then user has to be able to exit or see more details

Scenario: User can expand an event to see its details
Given user selected the city and the event list is shown
When the user clicks on an event
Then the element should expand


Scenario: user can collapse an event to hide its details
Given the event is expanded
When the user clicks on the event
Then the event should be collapsed