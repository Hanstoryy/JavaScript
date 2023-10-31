const birthday = new Date("2001-04-28");
const today = new Date();
const result = document.querySelector("#result");

let passedTime = today.getTime() - birthday.getTime();
let passedDay = Math.round(passedTime/(1000*60*60*24));

result.innerText = passedDay;