function myLocalScope(){
    let myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar);

let outerWear = "T-shirt";

function myOutfit(){
    let outerWear = "Sweater";
    return outerWear;
}
console.log(myOutfit());


function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

let sum = 0;
function addFive(){
    sum += 5; //This would be undefined 
}

let processed = 0;

function processArg(num){
    return (num + 3) / 5;
}

processed = processArg(7); // We are storing the answer of this mathematical equation in this variable
