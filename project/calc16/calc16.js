
let germanCities = ["Мюнхен", "Франкфурт", "Дрезден"];
let americanCities = ["Чикаго", "Хьюстон"];

function selectCountry(country){
    if(country == "none"){
        document.getElementById("cities").style.display = "none";
    }else{
        document.getElementById("cities").style.display = "block"; 
    }
    let optionsString = "";
    if (country == "gem") {
        for (let city of cities){
            optionsString +=`<option>${city}</option>`;
            }
        }
        else if(country == "amer"){
            for (let city of cities) {
                optionString += `<option>${city}</option>`;}
        } 
        document.getElementById("cities").innerHTML = optionsString;
        
    }


function sumInput(){
    checkedInputs=[];
    for(let input of inputs){
        let input=document.querySelectorAll("input")
        if (input==checked){
            checkedInputs.push(+input);   
        }
    sumImput=0;
    for(let el of checkedInputs){
        sum+=1;
        } 
return sumImput;   
    }
    alert(sumInput());
}
function sumSelect(){
    checkedSelects=[];
    for(let option of selects){
        let option=document.querySelectorAll("option")
        if (option==checked){
            checkedInputs.push(+option);   
        }
    sumImput=0;
    for(let el of checkedSelects){
        sum+=1;
        } 
return sumSelect;   
    }
    alert(sumSelect());
}