let ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray is now ["J", "cat"]
ourArray.unshift("Happy");
// ourArray is now ["Happy", "J", "cat"]

let myArray = [["John", 23], ["Dog", 3]];
myArray.shift();  
myArray.unshift(["Paul", 35]); // John, 23 will be replaced by Paul, 35.