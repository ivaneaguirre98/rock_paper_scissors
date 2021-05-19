// console.log("Hello World");

// set my variables to equal rock, paper and scissors
let rock = document.getElementById("rockChoice");
let paper = document.getElementById("paperChoice");
let scissors = document.getElementById("scissorsChoice");
let gameMessage = document.getElementById('gameMessage')

// set variables to equal initial score
let userScore = 0;
let cpuScore = 0;

//create an array for the CPU choice and assigning a random value of that array to cpuPick
let cpuOptions = ['rock', 'paper', 'scissors'];


//function that checks the score
function checkScore(myScore, machineScore){
    if(myScore >= 5){
        alert("You won! Press F5 to restart");
    }

    else if(machineScore >= 5){
    alert("You lost! Press F5 to restart");
    }
}

//function that compares the random choice to your choice
function game(userChoice){
    let cpuPick = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    
    if(userChoice === cpuPick){
        console.log("Tie");
        gameMessage.textContent = "Looks like a draw, play again";
    }

    else if(userChoice === 'rock' && cpuPick === 'scissors'){
        document.getElementById('userScore').innerHTML = (++userScore);
        gameMessage.textContent = "You won!"
    }

    else if(userChoice === 'rock' && cpuPick === 'paper'){
        document.getElementById('cpuScore').innerHTML = (++cpuScore);
        gameMessage.textContent = "You lose :("
    
    }

    else if (userChoice === 'paper' && cpuPick === 'rock'){
        document.getElementById('userScore').innerHTML = (++userScore);
        gameMessage.textContent = "You win!"
    }

    else if(userChoice === 'paper' && cpuPick === 'scissors'){
        document.getElementById('cpuScore').innerHTML = (++cpuScore);
        gameMessage.textContent = "You lose :("
    }

    else if(userChoice === 'scissors' && cpuPick === 'rock'){
        document.getElementById('cpuScore').innerHTML = (++cpuScore);
        gameMessage.textContent = "You lose :("
    }

    else if(userChoice === 'scissors' && cpuPick === 'paper'){
        document.getElementById('userScore').innerHTML = (++userScore);
        gameMessage.textContent = 'You Win!'
    }

    checkScore(userScore, cpuScore);

}

//adding event listeners for each button
rock.addEventListener('click', function(){
    game("rock");
});
paper.addEventListener('click', function(){
    game("paper");
});

scissors.addEventListener('click', function(){
    game("scissors");
});


