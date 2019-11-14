
// 1. Checking whether a num is even or not, returns true or false
function isEven(num) {
    return num % 2 === 0
}
// alert(isEven(16))

// 2. return the factorial of given number
function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
// alert(factorial(4))

// 3. kebab to snake_case
function kebobToSnake(str){
    var newStr = str.replace(/-/g,"_")
    return newStr
}
// alert(kebobToSnake("hello-cruel-world"))
// alert(kebobToSnake("changing-ev-ry-thing-please"))