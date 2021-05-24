
function sum(a,b){   
    return +a+ +b;   
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function divis(a,b){
    return a/b;
}

function showSum(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = sum(a,b); 
}
function showSub(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = sub(a,b); 
}
function showMult(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = mult(a,b); 
}
function showDivis(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = divis(a,b);
    if(a/0){
        alert("Делить на '0' нельзя")
    } 
}


    
    

