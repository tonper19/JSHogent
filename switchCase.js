switch (new Date().getDay()){
    case 0:
        day = "Sunday"
            break;
    case 1:
        day = "Monday";
            break;
    case 2:
        day = "Tuesday";
            break;
    case 3:
        day = "Wednesday";
            break;
    case 4: 
        day = "Thursday";
            break;
    case 5:
        day = "Friday";
            break;
    case 6:
        day = "Saturday";
            break;
}

function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2: 
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "N/A"
            break;
    }
    return answer;
}

console.log(caseInSwitch(11));

function sequentialSize(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSize(1))






