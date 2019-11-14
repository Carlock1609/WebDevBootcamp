var toDos = [];

while(userInput !== "quit"){    
    var userInput = prompt("What would you like to do?");

    if(userInput === "new"){
        var addTo = prompt("Enter in Todo?");
        toDos.push(addTo);
    }
    else if(userInput === "list"){
        alert(toDos);
    }
}
console.log("You quit the app!")
console.log(toDos)