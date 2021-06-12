function output(){
    let spls=[];
    let fio=document.querySelector(".fio").value;
    let fioLow = fio.toLowerCase();
    spls = fioLow.split(" ");
    for (let i = 0; i < spls.length; i++){
        let firstLetter = spls.substring(0, 1); 
        firstLetter.toUpperCase() + spls.slice(1).value;
        }
    if(spls[0]){
        document.getElementsByClassName("lname").innerHTML+=`Фамилия: ${spls[0]}`;}
    else if(spls[1]){
        document.getElementsByClassName("fname").innerHTML+=` Имя: ${spls[1]}`;}
    else if(spls[2]) {
        document.getElementsByClassName("middle_name").innerHTML+=`Отчество: ${spls[2]}`;}           
    }

