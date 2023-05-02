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
function getPlayerChoice(e){
    playerSelection = e.target.className;
    computerSelection = getComputerChoice();
    let resultMessage = playRound(playerSelection, computerSelection);
    document.querySelector('.result').innerHTML = resultMessage;
    document.querySelector('.score').textContent = `Computer : ${computerWon} vs Player : ${playerWon}`;
    if(computerWon == 5){
        document.querySelector('.result').textContent = "The End";
        document.querySelector('.score').textContent = `Computer Won ${computerWon} vs ${playerWon}`;
    }else if(playerWon == 5){
        document.querySelector('.result').textContent = "The End";
        document.querySelector('.score').textContent = `Player Won ${playerWon} vs ${computerWon}`;
    }
}
function playRound(p, c){
    let player = p == "Rock" ? 0 : p == "Paper" ? 1 : 2;
    let computer = c == "Rock" ? 0 : c == "Paper" ? 1 : 2;
    if(player == computer){
        return `Tie! <br> Computer : ${c} / You : ${p}`;
    }else if(player > computer){
        if(computer == 0 && player == 2){
            computerWon++;
            return `You Lose!<br> Computer : ${c} / You : ${p}`
        }
        playerWon++;
        return `You Won!<br> Computer : ${c} / You : ${p}`
    }else{
        if(computer == 2 && player == 0){
            playerWon++;
            return `You Won!<br> Computer : ${c} / You : ${p}`
        }
        computerWon++;
        return `You Lose!<br> Computer : ${c} / You : ${p}`
    }
}
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', getPlayerChoice));