let button = document.getElementById('btn');
button.addEventListener('click',checkValidity);

/*function check(){  
let fname =document.getElementById('fname').value;
let lname =document.getElementById('lname').value;
let login =document.getElementById('login').value;
let email =document.getElementById('email').value;
let password =document.getElementById('password').value;
let password1 =document.getElementById('password1').value;
let allValue = [fname,lname,login,email,password,password1];

if (fname==""){
    document.getElementById("errorMessageFname").innerHTML +="Это поле обязательно для заполнения";}
    else if (lname==""){
        document.getElementById("errorMessageLname").innerHTML +="Это поле обязательно для заполнения";}
    else if (login==""){
        document.getElementById("errorMessageLogin").innerHTML +="Логин необходим для входа в систему";}
    else if (email==""){
        document.getElementById("errorMessageEmail").innerHTML +="Email необходим для входа в систему";}
    else if (password==""){
        document.getElementById("errorMessagePassword").innerHTML +="Пароль должен содержать как минимум 6 символов, одну заглавную букву";}
    else if (password1==""){
        document.getElementById("errorMessagePassword1").innerHTML +="Пароли должны совпадать";}
    else if (allValue.length ==6){
        document.getElementById("successMessage").innerHTML +="Добро пожаловать," + fname;
        }
    else if(password != password1){   
           alert('Пароли не совпадают');  
           return false;  
         } 
}*/

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
}



