let ourDog = { // objects are defined with the curly braces
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

let myDog = {
    "name": "Honey",
    "legs": 4,
    "tails": 1,
    "friends": ["Annabelle"]
}

myDog.name = "Honey Pie"; // This is the easiest way to change a property's value in an object
myDog.bark = "woof"; // an easy way to add properties

delete myDog.name; // to delete a specific property
