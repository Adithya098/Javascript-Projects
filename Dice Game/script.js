'use strict';

let score1el=document.getElementById("score--0");
let score2el=document.getElementById("score--1");
let dice=document.querySelector(".dice");


score1el.textContent=0;
score2el.textContent=0;
dice.classList.add('hidden');


// swicthing between players
let activePlayer = 0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnSwitch = document.querySelector('.btn--hold'); // Assuming the button to switch players has this class

const switchPlayer = () => {
    if (activePlayer === 0) {
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
        activePlayer = 1;
    } else {
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active');
        activePlayer = 0;
    }
};

//calculating the scores
let score1=0;
let score2=0;

let rolldicebtn=document.querySelector('.btn--roll');
let holdscorebtn=document.querySelector('.btn--hold');

rolldicebtn.addEventListener("click", () => {
    
    let randomroll = Math.round(Math.random() * 5) + 1;
    console.log(randomroll, typeof randomroll);

    dice.classList.remove('hidden');
    dice.src = `dice-${randomroll}.png`;

    if(randomroll != 1) {
        if(activePlayer==0)
        {
            score1 += randomroll;
            document.getElementById("current--0").textContent = score1;
        }
        else if (activePlayer==1){
            score2 += randomroll;
            document.getElementById("current--1").textContent = score2;
        }
    } 
    else if (randomroll==1){
        if(activePlayer==0)
            {
                document.getElementById("score--0").textContent = score1;
                score1 = 0;
                document.getElementById("current--0").textContent = score1;
                switchPlayer();
            }
            else if (activePlayer==1){
                document.getElementById("score--1").textContent = score2;
                score2 =0;
                document.getElementById("current--1").textContent = score2;
                switchPlayer();
            }
    }
});

const checkWinner = () => {
    if (parseInt(document.getElementById("score--0").textContent) >= 100) {
        player0El.classList.add('player--winner');
        player1El.classList.remove('player--winner');
        rolldicebtn.disabled = true;
        holdscorebtn.disabled = true;
    } else if (parseInt(document.getElementById("score--1").textContent) >= 100) {
        player1El.classList.add('player--winner');
        player0El.classList.remove('player--winner');
        rolldicebtn.disabled = true;
        holdscorebtn.disabled = true;
    }
};

holdscorebtn.addEventListener("click", () => {
    if (activePlayer === 0) {
        document.getElementById("score--0").textContent = parseInt(document.getElementById("score--0").textContent) + parseInt(document.getElementById("current--0").textContent);
        document.getElementById("current--0").textContent = 0;
        score1=0;
    } if (activePlayer === 1) {
        document.getElementById("score--1").textContent = parseInt(document.getElementById("score--1").textContent) + parseInt(document.getElementById("current--1").textContent);
        document.getElementById("current--1").textContent = 0;
        score2=0;
    } 
    checkWinner();
    switchPlayer();
});

let newgamebtn=document.querySelector('.btn--new');
newgamebtn.addEventListener('click', () => {
    document.getElementById("score--0").textContent =0;
    document.getElementById("score--1").textContent =0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    score1 = 0;
    score2 = 0;
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    rolldicebtn.disabled = false;
    holdscorebtn.disabled = false;
    dice.classList.add('hidden');
});
