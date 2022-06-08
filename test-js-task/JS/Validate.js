function validate() 
{
let a = document.registration.login.value;
    if (a == "") 
    {
        alert("Укажите ваш логин");
        return false;
    }
let b = document.registration.password.value;
  if (b == "") 
  {
    alert("Укажите ваш пароль");
    return false;
  }
let с = document.registration.email.value;
if (с == "") 
  {
    alert("Укажите ваш Е-майл");
    return false;
  }
let d = document.registration.phone.value;
  if (d == "") 
  {
    alert("Укажите ваш телефон");
    return false;
  }
}
