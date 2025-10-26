// Audio player
const audio = new Audio("The Horrors - Something To Remember Me By.mp3");

let playing = false;
let musicaIniciada = false;

const play = document.getElementById("audio-play");
const pause = document.getElementById("audio-pause");

let progress = document.querySelector(".progress");
let update_time = setInterval(seekUpdate, 1000);
let curr_time = document.querySelector(".current-time");
let total_time = document.querySelector(".total-time");

// Autoplay con primer click
document.addEventListener('click', function(e) {
  if (!musicaIniciada) {
    audio.play();
    playing = true;
    play.style.display = "none";
    pause.style.display = "block";
    musicaIniciada = true;
  }
}, { once: true });

function toggleAudio() {
  playing = !playing;
  
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";  
  } else {
    play.style.display = "block";
    pause.style.display = "none";
  } 
  
  if (playing) audio.play();
  else audio.pause();
} 

function seekTo() {
  let seekto = audio.duration * (progress.value / 100);
  audio.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;
      
  if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration);
    progress.value = seekPosition;
          
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
          
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_time.textContent = durationMinutes + ":" + durationSeconds;
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());