// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


let randomWord;
let score = 0;
let time = 10;




//addWord Function
function addWord() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
}

addWord();

//updateScore function
function updateScore() {
  score++;
  scoreEl.textContent = score;
}

// Listen for user input
text.addEventListener("input", function() {
  if (text.value === randomWord) {
    updateScore();   
    addWord();       
    text.value = ""; 
    time += 5;
  }
});

//updateTime function
function updateTime() {
  if (time > 0) {
    time--;
    timeEl.textContent = time;
  } 
  else {
    alert("GAME OVER");
    time = 1;
    location.reload();
  }
}

// timer
let timer = setInterval(updateTime, 1000);