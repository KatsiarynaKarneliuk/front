/*function output(){
    let arrFio = [];
    let fio = document.querySelector(".fio").value;
    let fioLow = fio.trim().toLowerCase();
    arrFio = fioLow.split(" ");
    for (let i = 0; i < arrFio.length; i++){
        let firstLetter = arrFio[i].substring(0, 1); 
        arrFio[i]=firstLetter.toUpperCase() + arrFio[i].slice(1);
        }
    if (arrFio[0]){
        document.getElementsByClassName("lname").innerHTML += `Фамилия: ${arrFio[0]}`;
    }
    if (arrFio[1]){
        document.getElementsByClassName("fname").innerHTML += ` Имя: ${arrFio[1]}`;
    }
    if (arrFio[2]) {
        document.getElementsByClassName("middle_name").innerHTML += `Отчество: ${arrFio[2]}`;
    }           
    }
*/
function output(){
    let fioArray = [];
    let fio = document.querySelector(".fio").value;
    let fioLow = fio.trim().toLowerCase();
    fioArray = fioLow.split(" ");
    for (let i = 0; i < fioArray.length; i++){
        let firstLetter = fioArray[i].substring(0, 1); 
        fioArray[i] = firstLetter.toUpperCase() + fioArray[i].slice(1);
    }
    if (fioArray[0]){
        document.getElementById("lname").innerHTML += `Фамилия: ${fioArray[0]}`;
    }
    if (fioArray[1]){
        document.getElementById("fname").innerHTML += ` Имя: ${fioArray[1]}`;
    } 
    if (fioArray[2]) {
        document.getElementById("middle_name").innerHTML += `Отчество: ${fioArray[2]}`;
    }           
    }    

