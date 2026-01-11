let current = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bgMusic');

function nextSlide() {
  if (music.paused) {
    music.volume = 0.5;
    music.play();
  }
  slides[current].classList.remove('active');
  current++;
  if (current < slides.length) {
    slides[current].classList.add('active');
  }
}

slides[0].classList.add('active');

const text = "Happy Birthday Handsome 💖";
let i = 0;
const typeText = document.getElementById("typeText");

function typing() {
  if (i < text.length) {
    typeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 120);
  }
}
typing();

const heartArea = document.getElementById("heartArea");
const heartQuotes = [
  "Being with you is fun 💕",
  "You're amazing ✨",
  "So grateful for you 🌸",
  "You make me proud 💖",
  "You are my sunshine ☀️"
];

let heartIndex = 0;

function spawnHeart() {
  if (heartIndex >= heartQuotes.length) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗<br>" + heartQuotes[heartIndex];
  heart.style.left = Math.random() * 80 + "%";
  heart.style.top = Math.random() * 60 + "%";

  heartArea.appendChild(heart);
  heartIndex++;

  setTimeout(() => {
    heart.remove();
    spawnHeart();
  }, 1800);
}

spawnHeart();
