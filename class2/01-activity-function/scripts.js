// My welcome message
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();

if(month === 2 && day === 20) {
  console.log("Today is my birthday!");
} else if(month === 12) {
  console.log("Happy holidays!");
} else {
  console.log("Welcome to my site!");
}


// Information about one of my favorite activities.
calculateActivity("yoga", 4);


// Outputs information about an activity and its frequency.
function calculateActivity(activity, countPerMonth) {
  var monthsPerYear = 12;
  var countPerYear = countPerMonth * monthsPerYear;

  var message = "One of my favorite activities is " + activity + ". ";
  message += "I do it " + countPerMonth + " times per month. ";
  message += "That's " + countPerYear + " times a year!";

  console.log(message);
}