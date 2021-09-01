function computerPlay() {
    const choiceList = ["rock", "paper", "scissors"]
    let randomChoice = choiceList[Math.floor(Math.random() * choiceList.length)]
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "you lose, paper beats *rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win, *rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "you win, *paper beats rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose, scissors beats *paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "you lose, rock beats *scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "you win, *scissors beats paper"
    }  
}

let playerSelection = window.prompt("Make your move: ").toLowerCase()
let computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))