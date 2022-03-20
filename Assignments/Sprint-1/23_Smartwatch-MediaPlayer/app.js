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
  document.getElementById("musicDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "block";
  document.getElementById("music").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("message").style.color = "white";
}
//showing full messages after clicking on message
function showJavaMsg() {
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
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
  document.getElementById("btnMusic").disabled = true;
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
  document.getElementById("btnMusic").disabled = true;
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
  document.getElementById("btnMusic").disabled = false;
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "none";

  innerMsg.style.display = "none";
  document.getElementById("timeDisplay").style.display = "block";
  showTimeDay();
  document.getElementById("music").style.color = "white";
  document.getElementById("clock").style.color = "white";
  document.getElementById("message").style.color = "white";
}

//Data for music tracks
var tracks = [
  {
    id: "2",
    name: "Dusk Till Dawn",
    trackSrc: "assests/dusk.mp3",
    artist: "Zayan",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Dusk_Till_Dawn_Zayn_Malik.jpg",
  },
  {
    id: "3",
    name: "Hills",
    trackSrc: "assests/hills.mp3",
    artist: "Weeknd",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Weeknd_-_The_Hills.jpg",
  },
  {
    id: "4",
    name: "Eastside",
    trackSrc: "assests/eastside.mp3",
    artist: "Khalid",
    imgSrc: "https://i.ytimg.com/vi/KFof8aaUvGY/maxresdefault.jpg",
  },

  {
    id: "5",
    name: "Ocean",
    trackSrc: "assests/ocean.mp3",
    artist: "Khalid",
    imgSrc:
      "https://images.genius.com/aa371867dc335167a703b247759c115a.619x273x1.jpg",
  },
  {
    id: "6",
    name: "Trip",
    trackSrc: "assests/trip.mp3",
    artist: "Ella Mai",
    imgSrc: "https://i.ytimg.com/vi/uHDO2aqY5mc/maxresdefault.jpg",
  },
  {
    id: "7",
    name: "Sunflower",
    trackSrc: "assests/sunflower.mp3",
    artist: "Post Malone",
    imgSrc: "https://i.ytimg.com/vi/BN63QQmn3Ck/maxresdefault.jpg",
  },
];
//showing music window
function playMusic() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "block";
  document.getElementById("message").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("music").style.color = "white";
}

let play = document.getElementById("play-pause");
let ol = document.getElementById("orderList");

//iterate through data to crate list
tracks.forEach((track) => {
  let li = document.createElement("li");
  var audio = document.querySelector("audio");
  li.innerHTML =
    track.id + " . " + track.name + "<span>- " + track.artist + "</span>";
  var img = document.getElementById("songimg");

  //function to set track details and play song
  li.onclick = function () {
    var trackname = document.getElementById("trackname");
    trackname.innerText = track.name;

    img.setAttribute("src", track.imgSrc);

    audio.pause();
    audio.setAttribute("src", track.trackSrc);
    audio.load();
    audio.play();
    play.innerHTML = "Pause";
  };

  ol.appendChild(li);
});
//changing state of button
function playtrack() {
  let audio = document.querySelector("audio");
  if (audio.paused) {
    play.innerHTML = "Pause";
    audio.play();
  } else {
    play.innerHTML = "Play";
    audio.pause();
  }
}
