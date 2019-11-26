let lis = document.querySelectorAll("li");

for(let i = 0; i <lis.length; i++){
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected")
    });
    lis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    })
};




// firstLI.addEventListener("mouseover", function() {
//     this.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function() {
//     firstLI.style.color = "black";
// });








// let firstLI = document.querySelector("li");

// firstLI.addEventListener("click", function() {
//     this.style.textDecoration = "line-through"
// });