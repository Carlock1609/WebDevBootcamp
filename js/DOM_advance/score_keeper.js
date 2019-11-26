let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resButton = document.querySelector("#reset");
let firstDis = document.querySelector("#p1Dis");
let secondDis = document.querySelector("#p2Dis");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let player1 = 0;
let player2 = 0;
let gameOver = false;
let winningScore = 5;

//player 1 button
p1Button.addEventListener("click", function() {
    if(!gameOver) {
        player1 += 1;
        console.log(player1, winningScore)
        if(player1 === winningScore) {
            firstDis.classList.add("winner");
            gameOver = true;
        };
        firstDis.textContent = player1;
    };
});
// player 2 button
p2Button.addEventListener("click", function() {
    if(!gameOver) {
        player2 += 1;
        if(player2 === winningScore) {
            secondDis.classList.add("winner");
            gameOver = true;
        };
        secondDis.textContent = player2;
    };
});

//resets game
resButton.addEventListener("click", function() {
    reset();
});
function reset() {
    player1 = 0;
    player2 = 0;
    firstDis.textContent = 0;
    secondDis.textContent = 0;
    firstDis.classList.remove("winner");
    secondDis.classList.remove("winner");
    gameOver = false;
}


// practice with this, numInput.value or this.value
// sets number of wins
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value)
    reset();
})

