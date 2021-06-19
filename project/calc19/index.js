
class Calculator{
    static sum(a,b){   
        return +a+ +b;   
    }
    static sub(a,b){
        return a-b;
    }
    static mult(a,b){
        return a*b;
    }
    static divis(a,b){
        return a/b;
    }
}
function showSum(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = Calculator.sum(a,b); 
}
function showSub(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = Calculator.sub(a,b); 
}
function showMult(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = Calculator.mult(a,b); 
}
function showDivis(){
    let a=document.getElementById('firstNumber').value;  
    let b=document.getElementById('secondNumber').value;
    document.getElementById('result').value = Calculator.divis(a,b);
    if(b==0){
    document.getElementById('result').value="Делить на '0' нельзя"
    } 
}


    
    

