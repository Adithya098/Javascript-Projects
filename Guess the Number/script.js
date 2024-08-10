'use strict';

let secretNumber = Math.round(Math.random()*20);
let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener("click", function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess,secretNumber);

    if (!guess) {
        document.querySelector('.message').textContent = "Enter a number.⚠️";
    } else {
        if(score>0){
            if (guess === secretNumber) {
                score += 1;
                document.querySelector('.message').textContent = '🎉 Correct Number!';
                document.querySelector('body').style.backgroundColor = '#619b8a';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = guess;
                if (score >= highscore) {
                    highscore=score;
                }
                

            } else if (guess > secretNumber) {
                score -= 1;
                document.querySelector('.message').textContent = '📈 Too high!';
            } else if (guess < secretNumber) {
                score -= 1;
                document.querySelector('.message').textContent = '📉 Too low!';
            }
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        else{
            document.querySelector('.message').textContent = '❄️ You Lost Brother. You Lost it, dammit!';
        }
}
});

document.querySelector('.again').addEventListener("click", function() {
    secretNumber = Math.round(Math.random()*20);
    score = 20;
    document.querySelector('.message').textContent = '⌛ Start Guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

