var age = prompt("What is your age?: ")

if(age < 18){
    console.log("Sorry, you are not old enough to enter the venue.content")
}
else if(age > 18 && age < 21){
    console.log("You may enter but cannot drink.")
}
else{
    console.log("You may enter and drink")
}