
btn.onclick = function (e){
    e.preventDefault();

    let user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        login: document.getElementById("login").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    console.log(user);
    fetch('https://httpbin.org/post',
        {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
            }        
        })
        .then(response => response.json())
        .then(user =>{
            console.log(user);
        })
        .catch(error => console.log(error));
}  

/*let button = document.getElementById('btn');
button.addEventListener('click',submit);

function submit(){
//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); } 
}

//Проверка для всех полей
function checkAll() {
		//получаем все инпуты
    let inputs = document.querySelectorAll("input");
		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }
		//выводим ошибки в div 
    let errorDiv = document.querySelector('.errorMessageEmail');
    errorDiv.innerHTML = errors.join('. \n');
}
let email =document.getElementById('email').value;
function ValidateEmail(email) {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}*/