var getAge = Number(prompt("Please enter in your age: "))

if(getAge < 0){
    alert("Your age is negative!")
}
if(getAge === 21){
    alert("Your 21!!! YASS")
}
if(getAge % 2 !== 0){
    alert("Your age is ODD!")
}
if(getAge % Math.sqrt(getAge) == 0){
    alert("Your age is a perfect square!")
}
