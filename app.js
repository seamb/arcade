 //GLOBAL ELEMENTS
 const currentTurn = document.querySelector('.currentTurn')
 const startBut = document.getElementById("startBut");
 const gameSquare = document.querySelectorAll("square");
 let gameArray = Array.from(gameSquare); 






//set the starting state. Empty array of 9 strings for each square
gameState =
["","","",
 "","","",
 "","","",]






//enter our names and have them displayed
//pop up will ask for first opponents Name:
function getPlayer() {
let player1name = window.prompt("Who will be X? ");
alert(player1name + " is X");
console.log(player1name);
//Player One will be changed to first opponents name on the scoreboard
document.getElementById("playerOne").innerHTML = player1name

//repeated for 2nd plater
let player2name = window.prompt("Who will be O? ");
alert(player2name + " is O");
console.log(player2name);
document.getElementById("playerTwo").innerHTML = player2name
}


