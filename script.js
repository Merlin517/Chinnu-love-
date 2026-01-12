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
/* ===============================
FLIP CARD CLICK FIX
================================ */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* ===============================
HEART BURST + NOTE POPUP
================================ */
const heartQuotes = [
  "💖 Being with you is so fun",
  "🌟 You're so amazing",
  "🙏 I'm so grateful for you",
  "🏆 You make me proud",
  "☀️ You are my sunshine"
];

let heartIndex = 0;

function burstHeart() {
  if (heartIndex >= heartQuotes.length) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 80 + "vw";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
    showNote(heartQuotes[heartIndex]);
    heartIndex++;
  }, 1800);
}

function showNote(text) {
  let popup = document.querySelector(".note-popup");
  popup.innerHTML = `<p>${text}</p>`;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

/* ===============================
FLOATING EMOJIS EVERYWHERE
================================ */
const emojis = ["💖","✨","💗","🌸","💫","🎀","🦋"];
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 6000);
}, 800);
