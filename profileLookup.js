let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "123456789",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "457232589",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "9876756432",
        "likes": ["Intriguing Cases", "Violin"]
    }
]



function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

let data = lookUpProfile("Akira", "likes");

console.log(data);