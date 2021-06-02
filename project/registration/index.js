let button = document.getElementById('btn');
button.addEventListener('click',check);

function check(){  
let fname =document.getElementById('fname').value;
let lname =document.getElementById('lname').value;
let login =document.getElementById('login').value;
let email =document.getElementById('email').value;
let password =document.getElementById('password').value;
let password1 =document.getElementById('password1').value;
let allValue = [fname,lname,login,email,password,password1];

if (fname==""){
    document.getElementById("errorMessageFname").innerHTML +="Это поле обязательно для заполнения";}
if (lname==""){
    document.getElementById("errorMessageLname").innerHTML +="Это поле обязательно для заполнения";}
if (login==""){
    document.getElementById("errorMessageLogin").innerHTML +="Это поле обязательно для заполнения";}
if (email==""){
    document.getElementById("errorMessageEmail").innerHTML +="Это поле обязательно для заполнения";}
if (password==""){
    document.getElementById("errorMessagePassword").innerHTML +="Это поле обязательно для заполнения";}
if (password1==""){
    document.getElementById("errorMessagePassword1").innerHTML +="Это поле обязательно для заполнения";}
if (allValue.length ==6){
    document.getElementsByClassName("successMessage").innerHTML +="Добро пожаловать," + fname;
        }
}




