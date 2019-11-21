// examples of how to just get the first p tag
let p1 = document.getElementById("first")
let p2 = document.getElementsByClassName("special")[0]
let p3 = document.querySelector("#first")
let p4 = document.querySelectorAll(".special")[0]
let p5 = document.getElementsByTagName("p")[0]

p1.style.color = "red"

let h1 = document.getElementsByTagName("h1")[0]
h1.style.border = "1px solid pink"

// add,remove,toggle
let change1 = document.querySelector("p")
change1.classList.add("big")
