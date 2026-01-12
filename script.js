
const slides = document.querySelectorAll('.slide');
let index = 0;

document.querySelectorAll('.next').forEach(btn => {
  btn.onclick = () => {
    slides[index].classList.remove('active');
    index++;
    slides[index].classList.add('active');
    document.getElementById("bgMusic").play();
  };
});

// Typing effect
const text = "Happy Birthday Handsome 💖";
let i = 0;
const typeEl = document.getElementById("typeText");

function type() {
  if (i < text.length) {
    typeEl.textContent += text[i++];
    setTimeout(type, 120);
  }
}
type();

// Floating emojis
const emojis = ["💖","✨","💫","💗","🫶"];
setInterval(() => {
  const e = document.createElement("span");
  e.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  e.style.left = Math.random()*100 + "vw";
  e.style.fontSize = "20px";
  document.getElementById("emoji-layer").appendChild(e);
  setTimeout(()=>e.remove(),6000);
}, 800);
