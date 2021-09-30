function computerPlay() {
    var random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

}

function playerPlay() {

    while (true) {
        var user = prompt("What's your play?");

        user = user.toLowerCase();
        if (user == "rock" || user == "paper" || user == "scissors") {
            return user;
        } else {
            continue;
        }
    }
}



function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    console.log(playerSelection);

    if (playerSelection == "rock" && computerSelection == "paper") {

        return "computer";

    } else if (playerSelection == "rock" && computerSelection == "scissors") {

        return "player";

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        return "player";
        
    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        return "computer";

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        
        return "computer";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        return "player";

    } else if (playerSelection == computerSelection) {

        return "tie";

    }
}


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (var i=1; i<=5; i++) {
        console.log("Round " + i);
        console.log("Rock, Paper, Scissors, Shoot!");

        let result = playRound(playerPlay(), computerPlay());
    
        switch (result){
            case "player":
                playerScore = playerScore + 1;
                break;
            case "computer":
                computerScore = computerScore + 1;
                break;
            case "tie":
                playerScore = playerScore + 1;
                computerScore = computerScore + 1;
                break;
        }


        console.log("Computer's Score: " + computerScore);
        console.log("Player's Score: " + playerScore);

        if (computerScore - playerScore >= 2) {
            console.log("You lost!");
            return;
        } else if (playerScore - computerScore >= 2) {
            console.log("You won!");
            return;
        }
    }

    if (computerScore == playerScore && computerScore - playerScore < 2) { 
        console.log("It's a tie!");
    }
}


game();


