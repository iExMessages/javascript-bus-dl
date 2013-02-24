// My welcome message
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var birthMonth = 3;
var birthDay = 4;

if(month === birthMonth && day === birthDay) {
  alert("Today is my birthday!");
} else if(month === 12) {
  alert("Happy holidays!")
} else {
  alert("Welcome to my site!")
}


// Information about one of my favorite activities.
var favoriteActivity = "yoga";
var countPerMonth = 4;
var monthsPerYear = 12;
var countPerYear = countPerMonth * monthsPerYear;

var message = "One of my favorite activities is " + favoriteActivity + ". ";
message += "I do it " + countPerMonth + " times per month. ";
message += "That's " + countPerYear + " times a year!";

console.log(message);