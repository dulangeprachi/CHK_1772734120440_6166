const API_KEY="AIzaSyDvCWiiSz3HHEQtbVQYUpNvrIVPKd2LCdE";

async function askAI(){

let term=document.getElementById("termInput").value;

let prompt="Explain this medical term in very simple language for elderly patients: "+term;

let response=await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+API_KEY,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

contents:[{parts:[{text:prompt}]}]

})

}

);

let data=await response.json();

let text=data.candidates[0].content.parts[0].text;

document.getElementById("aiResult").innerText=text;

}