var req = new XMLHttpRequest();
req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
  var htmlPage = req.responseXML;
  var adress = htmlPage.getElementById("address").innerHTML;
  alert(adress);
  document.getElementById("result").innerHTML = adress;
  }
}
req.open("GET","/lab/webapp/jfp/18/address",true);
req.responseType = "document";
req.send();
