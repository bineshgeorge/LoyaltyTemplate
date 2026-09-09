// JavaScript Document

var password = document.getElementById("psw")
  , confirm_password = document.getElementById("confirm_psw");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Password Does Not Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;