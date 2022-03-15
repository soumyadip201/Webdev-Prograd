const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];

  // Instead of forloop use Map method
  // Code here
  detailedPlayers = players.map((item, index) => {
    let object = {};
    object.name = item;
    object.strength = getRandomStrength();
    object.image = "images/super-" + (index + 1) + ".png";
    object.type = randomType();
    return object;
  });

  return detailedPlayers;
};

//generate random type
const randomType = () => {
  let random = Math.round(Math.random());
  return random === 0 ? "hero" : "villain";
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";
  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  let arr = players.map((item) => {
    fragment += `<div class="player">
            <img src="${item.image}" alt="">
            <div class="name">${item.name}</div>
            <div class="strength">${item.strength}</div>
            </div>`;
  });
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};
window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
