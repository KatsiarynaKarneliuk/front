function Check(){
    let result = document.getElementById('test').value;
    if(result ==""){
        alert("Ваше поле не заполнено");
    }
}
function compare(a,b){
    if(a>b){
        return a;
    }
    else {return b;
    }
}

function compare3(a, b, c){
    if(a > b && a>c){
        return a;
        }
    else if(b > a && b > c){
            return b;
        }
    else{
        return c;
    }
} 

function checkAge(age)
{
    if(age >= 18){
        alert("Все ОК")
    }
    else{
        alert("Вход запрещен")
    }
}

function checkAge1(age){
    (age >= 18) ? alert("Все ОК"): alert("Вход запрещен"); /* тенантное условие для короткого условия*/                                      
}

/*switch для большого количества однотипных условий для одной переменной*/ 

function weekDayName(number){ /*по числу, кот пришло определить день недели*/
    let name = '';
    switch(number)
    {
        case 1:name = "Понедельник"; break;    /*case и breake как {}*/ 
        case 1:name = "Вторник";break;
        case 1:name = "Среда";break;

        default:name = "Такого дня недели не существует";
    }
    return name;
} 
weekDayName(2);
