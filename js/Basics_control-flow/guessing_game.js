//create secret number
var secretNum = 4;

//ask user for guess
var alreadyGuessed = 0
//check guess
while(alreadyGuessed < 5){
    var userGuess = Number(prompt("Guess a number between 1-10: "));
    alert("You guessed " + userGuess + ".");

    if(userGuess === secretNum){
        alert("You guessed the seceret number! -> " + secretNum);
        break
    }
    else if(userGuess > secretNum){
        alert("You guessed to high! Guess again!");
        alreadyGuessed++;
    }
    else{
        alert("You guessed to low! Guess again!");
        alreadyGuessed++;
    }
}