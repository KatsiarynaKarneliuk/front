function clickMe(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let allvalue=[fname, lname, phone, email];
    alert("Проверьте, пожалуйста, верно ли вы ввели: " + allvalue);
}

function changeMe(){
    let avatarChange = document.getElementById('avatar');
    avatarChange.src = "image/depositphotos_59478951-stock-photo-red-kitten.jpg" 
}

function select(sender){
    sender.classList.add("selected");
}
