function setReminder(){

let time = document.getElementById("reminderTime").value;

alert("Reminder set for " + time);

setInterval(function(){

let now = new Date();

let currentTime = now.getHours()+":"+String(now.getMinutes()).padStart(2,"0");

if(currentTime === time){

alert("Time to take your medicine!");

speech("Time to take your medicine");

}

},60000);

}