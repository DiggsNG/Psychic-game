
var win = 0;
var lose = 0;
var remain = 9;
//*var alphaChoice = 0;
var userChoice = 0;
var letterChoice = 0;
//This is an array for capturing keystrokes.
var capTurkeys = [];
//*This function creates an array.
var alphaChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newuser = "";
//*Reset game.
rset();
//This function asked the user for his/her name.
function getUserName() {
  newuser = prompt("Please enter you name", "Your Name");
  if (newuser != null) {
    document.getElementById("userName").innerHTML =
      "Hello" + newuser + "Welcome to the Psychic Game, good fortune";
  }
  else {
    getUserName();
  }
  rset();
  startGame();
}
//*This fuction  is run whenever the user presses a key.
//*Capture user keystrokes.
function startGame() {
  document.onkeyup = function (event) {

    //*Determine which key was pressed.
    var userChoice = event.key;
    //*Random selection of computer choice.
    var letterChoice = alphaChoice[Math.floor(Math.random() * alphaChoice.length)];
    //*Subtracting from counter as user plays game.
    remain--;

    //Push character from key event to Array.

    document.onkeypress = function (evt) {
      evt = evt || window.event;

      // Ensure we only handle printable keys
      var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

      if (charCode) {
        capTurkeys.push(userChoice);
      }
    };

    //* Compare user choice with computer choice.
    if (userChoice === letterChoice) {
      win++;
      rset();
      startGame();
      winMessage();
    }
    else {
      if (remain == 0) {
        lose++;
        rset();
        startGame();
        loseMessage();
      }
    }

    //*Use of innerHTML to load updates into DOM.
    printOnScreen();

  }
}

printOnScreen();

//*setup function to reset counters. 
function rset() {
  remain = 9;
  capTurkeys = [];
  printOnScreen();
}


function printOnScreen() {
  var html =
    "<p> Number of winners: " + win + "</p>" +
    "<p> Number of loses: " + lose + "</p>" +
    "<p> Number of remaining games: " + remain + "</p>" +
    "<p> Characters entered:" + capTurkeys + "</p>";
  document.getElementById("scoreboard").innerHTML = html;
}


function winMessage() {
  var html = "<p>" + "Hello" + newuser + "Sorry, but after 10 tries you lose." + "</p>";
  document.getElementById("Message").innerHTML = html;
}

function loseMessage() {
  var html = "<p>" + "Hello" + newuser + "You won Great Job." + "</p>";
  document.getElementById("Message").innerHTML = html;
}