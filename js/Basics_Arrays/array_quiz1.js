// 0. print odd numbers
var numbers = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i % 3 == 0; i++){
    console.log(numbers[i]);
};

//  1. printReverse
function printReverse(arr){
    for(var i = arr.length-1; i >= 0; i--)
        console.log(arr[i])
}
// printReverse([1,2,3,4])

// 2. isUniform
function isUniform(arr){
    var first = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}
// isUniform([1,1,1,1])

// 3. sumArray
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total
}
// sumArray([1,2,3,4])

// REDUCE METHOD
// var numbers = [1,2,3,4,6];
// var sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);

// 4. max
function max(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > result){
            result = arr[i];
        }
    }
    console.log(result)
}

// forEach METHOD!!! max
function max(arr){
    var result = 0;
    arr.forEach(function(element){
        if(arr[element] > result){
            result = arr[element];
        }
    });
    console.log(result);
}
// max([1,10,3,4])