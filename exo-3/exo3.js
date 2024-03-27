// you can write js here
// console.log('exo-3');

const choices = { "fr": ["Pierre", "Feuille", "Ciseaux"], "en": ["Rock", "Paper", "Scissors"] }

let getPlayerChoice = (playerInput) => {
    let choice = playerInput[0].toUpperCase() + playerInput.slice(1)

    if (playerInput === "bomb" || playerInput === "Bomb" || playerInput === "BOMB") {
        return choice;
    } else if (choices["fr"].includes(choice) || choices["en"].includes(choice)) {
        return choice;
    } else {
        console.log("Vous n'avez pas renseigné la bonne valeur !")
    }
}

let getComputerChoice = (playerInput) => {
    let language = Object.keys(choices).find(key => choices[key].includes(playerInput))

    if (language === "fr") {
        return choices["fr"][Math.round(Math.random() * 2)]
    } else {
        return choices["en"][Math.round(Math.random() * 2)]
    }
}

let findWinner = (playerChoice, ComputerChoice) => {
    if (playerChoice === "bomb" || playerChoice === "Bomb" || playerChoice === "BOMB") {
        console.log("CHEATING BASTARD !!!\n\nWON")
    } else if (playerChoice === ComputerChoice) {
        console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nTIED`)
    } else {
        if (playerChoice === choices["fr"][0] || playerChoice === choices["en"][0]) {
            if (ComputerChoice === choices["fr"][2] || ComputerChoice === choices["en"][2]) {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nWON`)
            } else {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nLOST`)
            }
        } else if (playerChoice === choices["fr"][1] || playerChoice === choices["en"][1]) {
            if (ComputerChoice === choices["fr"][0] || ComputerChoice === choices["en"][0]) {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nWON`)
            } else {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nLOST`)
            }
        } else {
            if (ComputerChoice === choices["fr"][1] || ComputerChoice === choices["en"][1]) {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nWON`)
            } else {
                console.log(`Your choice : ${playerChoice}\n\nComputer choice : ${ComputerChoice}\n\nLOST`)
            }
        }
    }
}

let playGame = () => {
    let playerInput = prompt(`Votre choix (Pierre, Feuille, Ciseaux) ?\n\nYour choice (Rock, Paper, Scissors) ?\n\n`)
    let uChoice = getPlayerChoice(playerInput)
    let computerChoice = getComputerChoice(uChoice)

    if (uChoice !== undefined && computerChoice !== undefined) {
        console.log(findWinner(uChoice, computerChoice))
        playGame()
    } else {
        playGame()
    }
}

playGame()