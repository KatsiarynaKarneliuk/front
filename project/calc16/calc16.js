
let germanCities = ["Мюнхен", "Франкфурт"];
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

function sumAll(){

    checkedInputs=[];
    for(let input of checkedInputs){
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

    checkedSelects=[];
    for(let option of checkedSelects){
        let option=document.querySelectorAll("option")
        if (option==checked){
            checkedInputs.push(+option);   
        }
    sumSelects=0;
    for(let el of checkedSelects){
        sum+=1;
        } 
    return sumSelect;   
    }

    let sumAll=(sumImput+sumSelect).value;
    return sumAll;
}
alert(sumAll());