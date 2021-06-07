function output(){
    let fio=document.querySelector(".fio").value;
    if (fio !=""){ 
        lowFio=fio.toLowerCase().value;
        return  lowFio;
        }  
    let spls=lowFio.split(" ");
    el="";
    for (el of spls){
        let firstLetter = el.substring (0, 1); 
        let el= firstLetter.toUpperCase() + el.slice(1).value;
        return el;    
        }
    if(el == spls[0]){
        document.getElementsByClassName("lname").innerHTML+=`Фамилия: ${spls[0]}`;}
    else if(el == spls[1]){
        document.getElementsByClassName("fname").innerHTML+=` Имя: ${spls[1]}`;}
    else if(el == spls[2]) {
        document.getElementsByClassName("middle_name").innerHTML+=`Отчество: ${spls[2]}`;}           
    }

