function signal(color){
    switch(color.toLowerCase()){
        case "red" :
            console.log(`${color} : Stop`);
            break;
        case "yellow" :
            console.log(`${color} : Ready`);
            break;
        case "green" :
            console.log(`${color} : Go`);
            break;
        default:
            console.log("Invalid Error");
    }
}

signal("red");
signal("Yellow");
signal("Green");