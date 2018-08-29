# Train-App

This application creates a schedule for new trains and and keeps track of the schedules arrival and departure data using Firebase. The app uses moment.js to determine arrival times and minutes remaining until arrival.

How it works: Start by adding a train name, destination, and first train time that it arrives for that day, and frequency. The information is stored in Firebase for data persistance. Moment.js takes this information and gives back the next arrival of the train and minutes away.


