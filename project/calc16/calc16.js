
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
        for (let city of germanCities){
            optionsString +=`<option>${city}</option>`;
            }
        }else if(country == "amer"){
            for (let city of americanCities) {
                optionsString += `<option>${city}</option>`;
                }
            } 
        document.getElementById("cities").innerHTML = optionsString;
            
    }
    
function sumAll(){
    sumImput=0;
    sumSelects=0;
    sum=0;
    checkedInputs=[];
    for(let input of checkedInputs){
        let input=document.querySelectorAll("input")
        if (input==checked){
            checkedInputs.push(+input);   
        }
    
    for(let el of checkedInputs){
        sumImput+=1;
        } 
    return sumImput;   
    }

    checkedSelects=[];
    for(let option of checkedSelects){
        let option=document.querySelectorAll("option")
        if (option==checked){
            checkedInputs.push(+option);   
        }
    
    for(let el of checkedSelects){
        sumSelects+=1;
        } 
    return sumSelects;   
    }

    sum+=(sumImput+sumSelects).value;
    return sum;    
}
alert(sumAll());