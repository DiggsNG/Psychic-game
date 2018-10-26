
var win = 0;
var lose = 0;
var remain = 9;
//*var alphaChoice = 0;
var userChoice =0;
var letterChoice = 0;
var leterCount = 0;
//This is an array for capturing keystrokes.
var  capTurkeys =[];
//*This function creates an array.
var alphaChoice = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//*Reset game.
rset();
//*This fuction  is run whenever the user presses a key.
//*Capture user keystrokes.
document.onkeyup = function(event) {
                
    //*Determine which key was pressed.
    var userChoice = event.key;
    //*Random selection of computer choice.
    var letterChoice = alphaChoice[Math.floor(Math.random()* alphaChoice.length)];
    //*Subtracting from counter as user plays game.
    remain--;
    //Push character from key event to Array.
     document.onkeypress = function(evt) {
       evt = evt || window.event;

     // Ensure we only handle printable keys
      var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
      capTurkeys.push(String.fromCharCode(charCode));
      
}
};
                          
//* Compare user choice with computer choice.
if (userChoice == letterChoice) {
    win++;
    console.log(capTurkeys);
    
                   
      }
else {
    lose++;
    console.log(capTurkeys);
}

if( remain == 0){
    //*Calling reset function
    rset();
}     
//*Use of innerHTML to load updates into DOM.
capTurkeys.toString();
var html=
"<p> Number of winners: " +  win + "</p>" +
"<p> Number of loses: " + lose + "</p>" +
"<p> Number of remaining games: " + remain + "</p>"
"<p> Character entered:" + capTurkeys.toString() + "</p>";
document.getElementById("scoreboard").innerHTML = html; 
leterCount ++;

}

//*setup function to reset counters. 
function rset(){
win = 0;
lose = 0;
remain =9;
leterCount = 0;
}

var html=
"<p> Number of winners: " +  win + "</p>" +
"<p> Number of loses: " + lose + "</p>" +
"<p> Number of remaining games: " + remain + "</p>" 
"<p> Character entered:" + capTurkeys.toString() + "</p>";
document.getElementById("scoreboard").innerHTML = html;           
  


