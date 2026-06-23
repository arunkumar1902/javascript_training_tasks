const color = prompt("Enter any one color(Red, Yellow, Green) : ");

switch (color) {
    case "Red":
        console.log("Red -> Stop");
        break;
    case "Yellow":
        console.log("Yellow -> Ready");
        break;
    case "Green":
        console.log("Green -> Go");
        break;
    default:
        console.log("Invalid Signal");
};