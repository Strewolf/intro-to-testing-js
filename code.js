// helloWorld function 
function helloWorld() {
    return "Hello, World!"
}
function sayHello(input){ return "Hello, "+ "Pat" + "!";
}
function isFive(input) {
if (input==5){
    return true
    } else{
    return false
    }
}
function isEven(input){
    return input % 2 === 0;
}
function isVowel(input) {
     let vowels=["a", "e","i","o","u"]
if (typeof input=="string"){
    return vowels.includes(input.toLowerCase())
} else{
    return false
}
}
function add(input,input1){
    return Number(input)+Number(input1)
}

