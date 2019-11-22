// events - clicking btn, hovering link, dragging + dropping, pressing enter key
// event listener

element.addEventListener(type, functionToCall);
// when button clicked
let button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!")
})

//example
let button = document.querySelector("button");
let paragraph = document.querySelector("p");
button.addEventListener("click", function() {
    paragraph.textContent = "someone clicked the button!"
})

// gives alert if h1 clicked
let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    alert("Someone has clicked h1!")
})

h1.addEventListener("click", function() {
    h1.style.background = "pink"
})

// all in one line
document.querySelector("ul").addEventListener("click", function() {
    console.log("UL WAS CLICKED");
  });


  // "this" is the current element in function()
  for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      this.style.color = "purple";
    });
  }