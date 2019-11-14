// higher order functions - set interval
// We can pass functions to other functions??

function sing(){
    console.log("twinkle twinkle...")
    console.log("How i wonder...")
}
sing()
// This is a higher order function
// setInterval(sing, 500)

// setInterval(function(){
//     console.log("I am anonymous function!");
//     console.log("This is awesome")
// }, 2000)