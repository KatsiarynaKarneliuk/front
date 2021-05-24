function changeBackground(){
    switch (document.getElementById("color").value){
        case "white": document.body.style.backgroundColor = "#FFFAFA"; break;
        case "black": document.body.style.backgroundColor ="black"; break;
        case "blue": document.body.style.backgroundColor ="blue"; break;
        default :document.body.style.backgroundColor ="white"; break; 
    }       
}
