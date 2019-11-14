console.log("print all numbers between -10 and 19")
var counter1 = -10;
while(counter1 <= 19){
    console.log("Counter is at: " + counter1);
    counter1++;
}
console.log("print all even numbers between 10 and 40")
var counter2 = 10;
while(counter2 <= 40){
    console.log("Counter even is at: " + counter2);
    counter2+=2;
}
console.log("print all odd numbers between 300 and 333")
var counter3 = 300;
while(counter3 <= 333){
    if(counter3 % 2 === 1){
        console.log("Counter odd is at: " + counter3)
    }
    counter3++;
}
console.log("print all numbers divisible by 5 AND 3 between 5 and 50")
var counter4 = 5
while(counter4 <= 50){
    if(counter4 % 5 === 0 && counter4 % 3 === 0){
        console.log("Counter is divisible by 3 and 5: " + counter4)
    }
    counter4++;
}