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
