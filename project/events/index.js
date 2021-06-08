function check(){
    let inputText =document.getElementById('text');
    document.getElementById('text').innerHTML = ""; 
    document.getElementById('errorMessage').innerHTML = ""; 

    if(inputText.value == ""){
        document.getElementById('errorMessage').innerHTML+= "Вы ничего не ввели<br>";    
        }
    else{
        document.getElementById('errorMessage').innerHTML+= inputText.value;     
        }
    }    
    
function colorMe(){
    document.getElementById('text').style.backgroundColor="yellow";
}
function colorMeBack(){
    document.getElementById('text').style.backgroundColor="white";
}
    
function show(){
    switch (document.getElementById("breed").value){
        case "persian": document.getElementById('catImage').src="https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg"; break;
        case "versian": document.getElementById('catImage').src="img/depositphotos_59478951-stock-photo-red-kitten.jpg"; break;
    }
}
