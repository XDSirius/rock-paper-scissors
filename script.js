let user;
let computer;
const options =["rock","paper","scissors"];

let wins = 0;
let losses = 0;
let ties = 0;

function playGame() {
    alert("Let's play a game!");
    var playerChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log(playerChoice);
    var computerChoice = selectChoice();
    console.log(computerChoice);
    if(playerChoice === computerChoice){
        alert("It's a tie!");
        ties++;

    } else if(playerChoice == "paper"){

    }else if( playerChoice == "scissors"){

    }else{
        console.log("Invalid Input");
        playGame();
    }   
}

function selectChoice(){
    let computerChoice = options [Math.floor(Math.random() *3 )];
    //console.log(computerChoice);
    return computerChoice;



}

playGame();

