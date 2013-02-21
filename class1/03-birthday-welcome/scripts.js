// My welcome message
var isMyBirthday = true;

if(isMyBirthday) {
  alert("Today is my birthday!");
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