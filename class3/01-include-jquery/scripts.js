// Wait for window to finish loading, so we have access to the dom
window.onload = function() {
  // My welcome message
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  var welcomeMessage = document.getElementById("welcome-message");

  if(month === 2 && day === 20) {
    welcomeMessage.innerHTML = "Today is my birthday!";
  } else if(month === 12) {
    welcomeMessage.innerHTML = "Happy holidays!";
  } else {
    welcomeMessage.innerHTML = "Welcome to my site!";
  }

  // Information about one of my favorite activities.
  calculateActivity("yoga", 4);
};



// Outputs information about an activity and its frequency.
function calculateActivity(activity, countPerMonth) {
  var monthsPerYear = 12;
  var countPerYear = countPerMonth * monthsPerYear;

  var message = "One of my favorite activities is " + activity + ". ";
  message += "I do it " + countPerMonth + " times per month. ";
  message += "That's " + countPerYear + " times a year!";

  // The div that contains the activities output
  var container = document.getElementById("activities");

  // Create a new paragraph to hold the output
  var paragraph = document.createElement("p");

  // Add the message text to the paragraph
  paragraph.appendChild(document.createTextNode(message));

  // Add the paragraph to the container
  container.appendChild(paragraph);
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
  var container = document.getElementById("favorites");

  // Create a new paragraph to hold the output
  var paragraph = document.createElement("p");

  // Add the message text to the paragraph
  paragraph.appendChild(document.createTextNode(result));

  // Add the paragraph to the container
  container.appendChild(paragraph);
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
  var container = document.getElementById("connections");

  // The list that holds the connection items
  var list = container.getElementsByTagName("ul")[0];

  // Empty the list
  list.innerHTML = "";

  for(var i = 0; i < connections.length; i++) {
    var result = describeConnection(connections[i]);

    // Create a new list item for this connection
    var listItem = document.createElement("li");

    // Add the connection to the list item
    listItem.appendChild(document.createTextNode(result));

    // Add the list item to the list
    list.appendChild(listItem);
  }
}

// Returns a sentence describing the connection
function describeConnection(connection) {
  return "My " + connection.type + " " + connection.name + " likes " +
         connection.likes + ". \n";
}