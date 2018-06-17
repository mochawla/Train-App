 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCA2Q4pcAD_TlcI5Dr6_LSlpmYc9t6caW4",
    authDomain: "train-schedule-app-cf46c.firebaseapp.com",
    databaseURL: "https://train-schedule-app-cf46c.firebaseio.com",
    projectId: "train-schedule-app-cf46c",
    storageBucket: "train-schedule-app-cf46c.appspot.com",
    messagingSenderId: "141769440769"
  };
  firebase.initializeApp(config);

  var database = firebase.database();




//train schedule app javascript/jquery
$("#submit").on("click", function(event){
    event.preventDefault();

    var trainName = $("#trainName").val().trim();  

    var destination = $("#destination").val().trim();  

    var firstTrain = $("#firstTrain-time").val().trim();  
    
    var frequency = $("#frequency").val().trim();  

    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    
    var currentTime = moment();
    
    var timedifference = moment().diff(moment(firstTrainConverted), "minutes");
    
    var remainder = timedifference % frequency;
    
    var minutesAway = frequency - remainder;
    
    var nextTrain = moment().add(minutesAway, "minutes").format("hh:mm");
    
        
    $("#train-scheduler").append(
        "<tr>",
        "<td>" + trainName + "</td>", 
        "<td>" + destination + "</td>",
        "<td>" + frequency + "</td>",
        "<td>" + nextTrain + "</td>",
        "<td>" + minutesAway + "</td>",
        "</tr>"
    );
    


});    












