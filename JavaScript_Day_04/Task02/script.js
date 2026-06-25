const marks = [60,79,87,68,91];

let total = 0;

for(let i=0; i<marks.length; i++){
    total += marks[i];
}

let percentage = (total/(marks.length*100))*100;

if(percentage >= 90 ){
    console.log(`${percentage}% : A+ Grade`);    
}
else if(percentage >= 80 ){
    console.log(`${percentage}% : A Grade`);    
}
else if(percentage >= 70 ){
    console.log(`${percentage}% : B Grade`);    
}
else if(percentage >= 60 ){
    console.log(`${percentage}% : C Grade`);    
}
else{
    console.log(`${percentage}% : Fail`);    
}