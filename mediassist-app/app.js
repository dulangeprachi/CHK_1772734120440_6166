const input=document.getElementById("searchInput");

const suggestions=document.getElementById("suggestions");

input.addEventListener("input",function(){

let value=this.value.toLowerCase();

suggestions.innerHTML="";

for(let med in medicines){

if(med.toLowerCase().includes(value)){

let div=document.createElement("div");

div.className="suggestion";

div.innerText=med;

div.onclick=function(){

input.value=med;

suggestions.innerHTML="";

};

suggestions.appendChild(div);

}

}

});

function searchMedicine(){

let name=input.value;

let data=medicines[name];

if(!data){

document.getElementById("medicineInfo").innerHTML="Medicine not found";

return;

}

let html=`

<img src="${data.image}">

<h2>${name}</h2>

<p><b>Purpose:</b> ${data.purpose}</p>

<p><b>Dosage:</b> ${data.dosage}</p>

<p><b>Side Effects:</b> ${data.side_effects}</p>

<p><b>Precautions:</b> ${data.precautions}</p>

<p><b>Avoid:</b> ${data.avoid}</p>

<button onclick="speak('${data.purpose}')">🔊 Voice</button>

`;

document.getElementById("medicineInfo").innerHTML=html;

}

function speak(text){

let msg=new SpeechSynthesisUtterance();

msg.text=text;

speechSynthesis.speak(msg);

}