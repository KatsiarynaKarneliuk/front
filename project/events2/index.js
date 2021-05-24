 
function changeBackground(){
    switch (document.getElementById("color").value){
        case "white": document.getElementById('white').style.backgroundColor="#FFFAFA"; break;
        case "black": document.getElementById('black').style.backgroundColor="black"; break;
        case "blue": document.getElementById('blue').style.backgroundColor="blue"; break;
        default :document.getElementById('white').style.backgroundColor="white"; break; 
    }       
}
