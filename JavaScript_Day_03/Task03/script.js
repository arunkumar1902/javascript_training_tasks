const name = prompt("Enter Student Name : ");
const marks = Number(prompt("Enter Marks : "));

if(marks >= 90 && marks <= 100){
    console.log("Grade A");    
}
else if(marks >= 75 && marks < 90){
    console.log("Grade B");    
}
else if(marks >= 50 && marks < 75){
    console.log("Grade C");    
}
else if(marks >= 0 && marks < 50){
    console.log("Fail");    
}
else{
    console.log("Invalid input");
}