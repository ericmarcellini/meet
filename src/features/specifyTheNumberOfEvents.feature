Feature: Specify the number of events

Scenario: When user has not specified a number, Thirty-Two is the default number
Given the user has not specified a number
When the user searches
Then the default number of events should load

Scenario: User can change the number of events they want to see
Given the user opens the app
When the user specifies the number of events
Then that same amount of events should display
