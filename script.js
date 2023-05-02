let playerWon = 0;
let computerWon = 0;
let playerSelection = "";
let computerSelection = "";
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch(randomNum){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        default:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}
function getPlayerChoice(){
    let playerAnswer = prompt("Rock Paper Scissors?");
    switch(playerAnswer.toLowerCase()){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper"
        case "scissors":
            return "Scissors"
        default:
            console.log("Typo");
            return "Rock";
    }
}
function playRound(p, c){
    let player = p == "Rock" ? 0 : p == "Paper" ? 1 : 2;
    let computer = c == "Rock" ? 0 : c == "Paper" ? 1 : 2;
    if(player == computer){
        return `Tie! computer : ${c} / you : ${p}`;
    }else if(player > computer){
        if(computer == 0 && player == 2){
            computerWon++;
            return `You Lose! computer : ${c} / you : ${p}`
        }
        playerWon++;
        return `You Won! computer : ${c} / you : ${p}`
    }else{
        if(computer == 2 && player == 0){
            playerWon++;
            return `You Won! computer : ${c} / you : ${p}`
        }
        computerWon++;
        return `You Lose! computer : ${c} / you : ${p}`
    }
}
function game(){
    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Computer : ${computerWon}, player : ${playerWon}`);
}