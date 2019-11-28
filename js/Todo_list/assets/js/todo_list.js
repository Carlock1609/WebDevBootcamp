// Check off specific todos by clicking
let li = document.querySelectorAll("#li")

li.addEventListener("click", function() {
    for(let i = 0; i < li.length; i++) {
        li[i].style.textDecoration = "line-through";
    }
})
