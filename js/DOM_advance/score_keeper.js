let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resButton = document.querySelector("#reset");
let firstDis = document.querySelector("#p1Dis");
let secondDis = document.querySelector("#p2Dis");
let player1 = 0;
let player2 = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        player1 += 1;
        if(player1 === winningScore) {
            firstDis.classList.add("winner")
            gameOver = true;
        };
        firstDis.textContent = player1;
    };
});
p2Button.addEventListener("click", function() {
    if(!gameOver) {
        player2 += 1;
        if(player2 === winningScore) {
            secondDis.classList.add("winner")
            gameOver = true;
        };
        secondDis.textContent = player2;
    };
});



resButton.addEventListener("click", function() {
    player1 = 0;
    player2 = 0;
    firstDis.textContent = 0;
    secondDis.textContent = 0;
    firstDis.classList.remove("winner")
    secondDis.classList.remove("winner")
    gameOver = false;
});
