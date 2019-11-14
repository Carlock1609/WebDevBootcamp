// local scope cannot type x alone because that isnt global
function doMath(){
    var x = 40;
    console.log(x);
}
// doMath()

// x is now global, and diffrent than the doMath()
var x = "hello"
// alert(x)


// y is a global and we called it in a function
var y = 99;
function doMath2(){
    console.log(y)
}
// doMath2()

var y = 99;
function doMath3(){
    var y = 100
    console.log(y)
}
// doMath3()

var phrase = "hi there"
function doSomething(){
    var phrase = "Goodbye";
    console.log(phrase);
}
// doSomething()
// console.log(phrase)


function hi(){
    var name = "rusty";
    console.log(name);
}
function bye(){
    console.log(name)
}
hi()
bye()