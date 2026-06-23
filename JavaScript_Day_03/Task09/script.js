const age = Number(prompt("Enter your age : "));

if(age>=0 && age<=12){
    console.log("0-12 -> Child"); 
}
else if(age>=13 && age<=19){
    console.log("13-19 -> Teenager"); 
}
else if(age>=20 && age<=59){
    console.log("20-59 -> Adult"); 
}
else if(age>=60){
    console.log("60+ -> Senior Citizen"); 
}
else{
    console.log("Invalid Input");
}