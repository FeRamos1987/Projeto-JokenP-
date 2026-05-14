const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const resultado = document.getElementById('resultado');
const resetButton = document.getElementById('reset');

const userScore = document.getElementById('user-score');
const alexaScore = document.getElementById('alexa-score');

const traducoes = {
    rock: "Pedra",
    paper: "Papel",
    scissors: "Tesoura"
};

const emojis = {
    rock: "👊",
    paper: "🖐️",
    scissors: "✌️"
};

let userPoints = 0;
let alexaPoints = 0;

function getAlexaChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(userChoice) {
    const alexaChoice = getAlexaChoice();
    if (userChoice === alexaChoice) {
        resultado.textContent = `Empate! Alexa também escolheu ${traducoes[alexaChoice]} ${emojis[alexaChoice]}.`;
        return;
    
}
    const winConditions = 
        userChoice === "rock" && alexaChoice === "scissors" ||
        userChoice === "paper" && alexaChoice === "rock" ||
        userChoice === "scissors" && alexaChoice === "paper"
    
        if (winConditions) {
            userPoints++;
            userScore.textContent = userPoints;
            resultado.textContent = `Você venceu! Alexa escolheu ${traducoes[alexaChoice]} ${emojis[alexaChoice]}.`;
        } else {    
            alexaPoints++;
            alexaScore.textContent = alexaPoints;
            resultado.textContent = `Alexa venceu! Alexa escolheu ${traducoes[alexaChoice]} ${emojis[alexaChoice]}.`;
        }
    }
        function resetScore() {
            userPoints = 0;
            alexaPoints = 0;
            userScore.textContent = userPoints;
            alexaScore.textContent = alexaPoints;
            resultado.textContent = "Pontuação resetada!";
        }
    
        rock.addEventListener('click', () => play('rock'));
        paper.addEventListener('click', () => play('paper'));
        scissors.addEventListener('click', () => play('scissors'));
        resetButton.addEventListener('click', resetScore);
    