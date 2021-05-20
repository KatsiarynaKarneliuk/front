function clickMe(){
    let checks = document.getElementsByClassName('form');
        console.log(checks[0].value);
        console.log(checks[1].value);
        console.log(checks[3].value);
        console.log(checks[4].value);
    return checks
}
function askTheName () {
    alert(проверьте, пожалуйста, верны ли данные ' + checks);
}    

function changeMe(){
    let avatarChange = document.getElementById('avatar');
    avatarChange.src = "image/depositphotos_59478951-stock-photo-red-kitten.jpg" 
}

function select(sender){
    sender.classList.add("selected");
}
