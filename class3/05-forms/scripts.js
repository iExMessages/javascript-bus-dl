// Wait for window to finish loading, so we have access to the dom
$(document).ready(function() {
  // My welcome message
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  var welcomeMessage = $("#welcome-message");

  if(month === 2 && day === 20) {
    welcomeMessage.text("Today is my birthday!");
  } else if(month === 12) {
    welcomeMessage.text("Happy holidays!");
    welcomeMessage.css('color', 'green');
  } else {
    welcomeMessage.text("Welcome to my site!");
  }

  // Information about one of my favorite activities.
  calculateActivity("yoga", 4);

  $("#activitiesForm").on("submit", function() {
    var name = $("#activityName").val();
    var frequency = $("#timesPerMonth").val();

    if(name.length > 0 && frequency >= 0) {
      calculateActivity(name, frequency);
    } else {
      alert("You did not fill out the form correctly.");
    }

    return false;
  });

  // Bind click for activities
  $("#myActivities").on("click", function() {
    calculateActivity('drawing', 8);
    return false;
  });

  // Bind click for favorite things
  $("#favoriteThings").click(function() {
    favoriteThings();
    return false;
  });

  // Bind click for my connections
  $("#myConnections").click(function() {
    myConnections();
  });

  $("#theButton").on({
    mouseenter: function() {
      $(this).css("background-color", "orange");
      $(this).text("Seriously, don't do it!");
    },
    mouseleave: function() {
      $(this).css("background-color", "blue");
      $(this).text("Don't press the button.");
    },
    click: function() {
      $(this).css("background-color", "red");
      $(this).text("Noooo!");
      return false;
    }
  });
});



// Outputs information about an activity and its frequency.
function calculateActivity(activity, countPerMonth) {
  var monthsPerYear = 12;
  var countPerYear = countPerMonth * monthsPerYear;

  var message = "One of my favorite activities is <strong>" + activity + "</strong>. ";
  message += "I do it " + countPerMonth + " times per month. ";
  message += "That's " + countPerYear + " times a year!";

  // The div that contains the activities output
  var container = $("#activities");

  // Create a new paragraph with the message text
  var paragraph = $("<p>" + message + "</p>");

  // Add the paragraph to the container
  container.append(paragraph);
}

// Outputs information about my favorite things.
function favoriteThings() {
  var favorites = ["cats", "JavaScript", "sushi", "Girl Develop It"];
  var result = "My favorite things are ";

  for(var i = 0; i < favorites.length; i++) {
    if(i < (favorites.length - 1)) {
      result += favorites[i] + ", ";
    } else {
      // last word in the array
      result += "and " + favorites[i] +  ".";
    }
  }

  // The div that contains the favorites output
  var container = $("#favorites");

  // Create a new paragraph with the message text
  var paragraph = $("<p>" + result + "</p>");

  // Add the paragraph to the container
  container.append(paragraph);

  return false;
}


// Outputs information about my connections
function myConnections() {
  var connections = [
    {
      name: "Nyan",
      type: "cat",
      likes: "rainbows"
    },
    {
      name: "John",
      type: "friend",
      likes: "music"
    },
    {
      name: "Ein",
      type: "corgi",
      likes: "bouncing"
    }
  ];

  // The div that contains the connections
  var container = $("#connections");

  // The list that holds the connection items
  var list = container.find("ul");

  // Empty the list
  list.empty();

  for(var i = 0; i < connections.length; i++) {
    var result = describeConnection(connections[i]);

    // Create a new list item for this connection
    var listItem = $("<li>" + result + "</li>");

    // Add the list item to the list
    list.append(listItem);
  }

  return false;
}

// Returns a sentence describing the connection
function describeConnection(connection) {
  return "My " + connection.type + " " + connection.name + " likes " +
         connection.likes + ". \n";
}