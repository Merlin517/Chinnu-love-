let slides = document.querySelectorAll(".slide");
let index = 0;
let musicPlayed = false;

function nextSlide(){
  slides[index].classList.remove("active");
  index++;
  if(index < slides.length){
    slides[index].classList.add("active");
  }
  if(!musicPlayed){
    document.getElementById("bgMusic").play();
    musicPlayed = true;
  }
}

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    card.classList.toggle("flipped");
  });
});

function heartBurst(){
  for(let i=0;i<15;i++){
    let h = document.createElement("div");
    h.className="heart";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
  alert("You are deeply loved 💕");
}
