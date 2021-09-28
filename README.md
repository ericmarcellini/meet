[readme .pdf](https://github.com/ericmarcellini/meet/files/7218545/readme.pdf)

Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.
 
FEATURE 1: FILTER EVENTS BY CITY
SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I should be able to expand/collapse an event element to see more/less information about it.

Scenario 1: An event element is collapsed by default
Given user hasn’t clicked on the element
When the user opens the app
Then the event elements should be collapsed

Scenario 2: User can expand an event to see its details
Given the main page is open
When the user clicks on an event
Then the element should expand

Scenario 3: User can collapse an event to hide its details
Given the event is expanded
When the user clicks on the event
Then the event should be collapsed

FEATURE 3: SPECIFY NUMBER OF EVENTS
As the user, I should be able to specify the number of events that I would like displaying on my screen.

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t specified a number
When the user searches
Then 32 should be the default number of events.

Scenario 2: User can change the number of events they want to see
Given the user opens the app
When the user specifies the number of events
Then that same amount of events should display

FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to use the app without internet connection using cached data.

Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connection.
When the user opens the app
Then show cached data

Scenario 2: Show error when user changes the settings (city, time range)
Given the user changes the settings
When the user doesn’t have an internet connection
Then display error message

FEATURE 5: DATA VISUALIZATION
As a user, I should be able to see all of the upcoming events for every city

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user opens the app
When clicks on an event
Then A chart showing upcoming events for each city should display

[readme .pdf](https://github.com/ericmarcellini/meet/files/7218545/readme.pdf)
