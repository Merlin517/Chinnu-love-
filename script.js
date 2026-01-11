let slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
  slides[index].classList.remove('active');
  index++;
  slides[index].classList.add('active');
  document.getElementById('bgMusic').play();
}

const text = "Happy Birthday Handsome 💖";
let i = 0;
const typeEl = document.getElementById("typeText");

function typeWriter() {
  if (i < text.length) {
    typeEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Heart burst
const quotes = [
  "Being with u is so fun 💕",
  "You're so amazing ✨",
  "I'm so grateful for u 🥹",
  "You make me proud 🥰",
  "You're my sunshine 🌞"
];

const area = document.getElementById("heartArea");
let q = 0;

setInterval(() => {
  if (!area || q >= quotes.length) return;
  const heart = document.createElement("div");
  heart.innerHTML = "❤️ " + quotes[q++];
  heart.style.margin = "20px";
  area.appendChild(heart);
}, 2000);
const quotes = [
  "Being with you is so fun 😘",
  "You're so amazing ✨",
  "I’m so grateful for you 🥹",
  "You make me proud 🥰",
  "You are my sunshine ☀️"
];

let index = 0;

function heartBurst() {
  if (index >= quotes.length) return;

  const area = document.getElementById("heartArea");

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  const quote = document.createElement("div");
  quote.className = "heart-quote";
  quote.innerText = quotes[index];

  const x = Math.random() * 70 + 10;
  const y = Math.random() * 60 + 20;

  heart.style.left = x + "%";
  heart.style.top = y + "%";
  quote.style.left = x + "%";
  quote.style.top = (y + 8) + "%";

  area.appendChild(heart);
  area.appendChild(quote);

  setTimeout(() => {
    heart.remove();
    quote.remove();
    index++;
    heartBurst();
  }, 2800);
}

setTimeout(heartBurst, 1000);
