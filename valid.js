var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var email_error=document.getElementById('email_error');
var password_error=document.getElementById('pass_error');
function validate(){
    if(email.value.length<4){
        email.style.border=="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password.value.length<4){
        password.style.border=="1px solid red";
        password_error.style.display="block";
        password.focus();
        return false;
    }b

}

