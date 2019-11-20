
// CHANGING COLOR OF H1
let h1 = document.querySelector("h1");
h1.style.color = "pink";

// CHANGE BODY COLOR EACH SECOND
let body = document.querySelector("body");
let isBlue = false;

setInterval(function(){
    if (isBlue) {
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);