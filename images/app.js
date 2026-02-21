// Floating hearts
(function hearts(){
  const c = document.createElement("div");
  c.className = "hearts";
  document.body.appendChild(c);

  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = Math.random() > 0.5 ? "💖" : "💕";
    h.style.left = (Math.random() * 100) + "vw";
    h.style.fontSize = (18 + Math.random()*28) + "px";
    const dur = 3 + Math.random()*4;
    h.style.animationDuration = dur + "s";
    c.appendChild(h);
    setTimeout(() => h.remove(), dur*1000);
  }, 380);
})();

// Music toggle (must be triggered by user click)
let musicOn = false;
function toggleMusic(){
  const audio = document.getElementById("bgm");
  if (!audio) return;

  if (!musicOn){
    audio.volume = 0.35;
    audio.play().then(() => {
      musicOn = true;
      updateMusicBtn();
      localStorage.setItem("musicOn", "1");
    }).catch(() => {});
  } else {
    audio.pause();
    musicOn = false;
    updateMusicBtn();
    localStorage.setItem("musicOn", "0");
  }
}

function updateMusicBtn(){
  const btn = document.getElementById("musicBtn");
  if (!btn) return;
  btn.textContent = musicOn ? "⏸ Music" : "▶ Music";
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("musicOn");
  musicOn = saved === "1";
  updateMusicBtn();
});

// Typewriter
function typewriter(el, text, speed=24){
  if (!el) return;
  el.textContent = "";
  let i = 0;
  const id = setInterval(() => {
    i++;
    el.textContent = text.slice(0, i);
    if (i >= text.length) clearInterval(id);
  }, speed);
}

// Fade helper
function showFade(id){
  const el = document.getElementById(id);
  if (!el) return;
  requestAnimationFrame(() => el.classList.add("show"));
}// Heart explosion for final button
function heartBurst(count = 30){
  const layer = document.createElement("div");
  layer.style.position = "fixed";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "999";
  document.body.appendChild(layer);

  for (let i = 0; i < count; i++){
    const h = document.createElement("div");
    h.textContent = Math.random() > 0.5 ? "💖" : "💕";
    h.style.position = "absolute";
    h.style.left = "50%";
    h.style.top = "55%";
    h.style.fontSize = (18 + Math.random() * 26) + "px";
    h.style.transform = "translate(-50%, -50%)";
    h.style.opacity = "1";

    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 240;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist * -1;

    h.animate(
      [
        { transform: "translate(-50%, -50%) scale(0.8)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.2)`, opacity: 0 }
      ],
      { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );

    layer.appendChild(h);
    setTimeout(() => h.remove(), 1600);
  }

  setTimeout(() => layer.remove(), 1700);
}