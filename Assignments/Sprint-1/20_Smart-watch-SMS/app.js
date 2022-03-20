var updateTime = setInterval(showTimeDay, 1000); // update time for every 1s

//showing time and day
function showTimeDay() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes(); //getting time

  document.getElementById("topTime").innerHTML = time;

  document.getElementById("time").innerHTML = time; //showing time on page

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; //array of days
  document.getElementById("day").innerHTML = weekDays[today.getDay()]; // showing todays day on page
}

let message = document.getElementById("messageDisplay");
let innerMsg = document.getElementById("innermessage");
let hr = document.createElement("hr");
var msg = document.createElement("p");

//showing messages window
function showMessage() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "block";
  document.getElementById("music").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
}
//showing full messages after clicking on message
function showJavaMsg() {
  document.getElementById("btnMessage").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  // var javamsg = document.createElement('p')
  msg.innerText =
    "Java is high-level programming language developed by sun Microsystems";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showHtmlMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  // var htmlmsg = document.createElement('p')
  msg.innerText =
    "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showCssMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  // var cssmsg = document.createElement('p')
  msg.innerText = "Css is a cascading style sheet used for styling purpose.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
//showing time when clicks on clock button
function showWatch() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = false;
  document.getElementById("messageDisplay").style.display = "none";
  innerMsg.style.display = "none";
  document.getElementById("timeDisplay").style.display = "block";
  showTimeDay();
  document.getElementById("music").style.color = "white";
  document.getElementById("clock").style.color = "white";
}
