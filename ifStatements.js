function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes it's True"
    }
    return "No it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true"
    }
    return "No that was false";
}
console.log(trueOrFalse(false))


function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    return "Not equal";
}  


function compareEquality(a, b){
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));


function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log(compareEquality(10));

function testStrictNotEqual(val){
    if (val !== 17){
        return "Not Equal"
    }
    return "Equal"
}

function testElse(val){
    var result = "";

    if (val > 5){
        result = "Bigger than 5";
    } else{
        result = "Smaller than 5";
    }
    return result;
}