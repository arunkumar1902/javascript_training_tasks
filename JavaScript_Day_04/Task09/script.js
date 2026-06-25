const age = Number(prompt("Enter age : "));
const weight = Number(prompt("Enter weight : "));

if(age>18){
    if(weight>50){
        console.log("Eligible For Treatment");
    }
    else{
        console.log("Not Eligible");    
    }
}
else{
    console.log("Not Eligible");    
}