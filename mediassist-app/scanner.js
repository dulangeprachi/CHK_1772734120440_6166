function startScanner(){

document.getElementById("scanner").innerHTML='<div id="reader" style="width:300px;margin:auto;"></div>';

let scanner=new Html5QrcodeScanner(

"reader",

{fps:10,qrbox:250}

);

scanner.render(function(code){

document.getElementById("searchInput").value=code;

searchMedicine();

});

}