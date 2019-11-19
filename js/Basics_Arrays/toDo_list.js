var toDos = [];

while(userInput !== "quit"){    
    var userInput = prompt("What would you like to do?");

    if(userInput === "new"){
        var addTo = prompt("Enter in Todo?");
        toDos.push(addTo);
    }
    else if(userInput === "delete"){
        var index = prompt("Enter index of todo to delete.");
        toDos.splice(index, 1);
        alert(toDos[index] + " Was deleted from toDos.");
    }
    else if(userInput === "list"){
        listTodos();
    }
}
console.log("You quit the app!")
console.log(toDos)

function listTodos(){
    toDos.forEach(function(todo, i){
        console.log("****");
        console.log(i + ": " + todo);
        console.log("****");
    });
}