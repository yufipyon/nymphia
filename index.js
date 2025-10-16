// audio player
      
// replace with your own url
const audio = new Audio("The Horrors - Something To Remember Me By.mp3");

// playing state
let playing = false;
let musicaIniciada = false; // nueva variable para controlar el autoplay

// icons
const play = document.getElementById("audio-play");
const pause = document.getElementById("audio-pause");

// time things
let progress = document.querySelector(".progress");
let update_time = setInterval(seekUpdate, 1000);
let curr_time = document.querySelector(".current-time");
let total_time = document.querySelector(".total-time");

// NUEVO: Autoplay con primer click
document.addEventListener('click', function(e) {
  if (!musicaIniciada) {
    audio.play();
    playing = true;
    play.style.display = "none";
    pause.style.display = "block";
    musicaIniciada = true;
  }
}, { once: true }); // se ejecuta solo una vez

function toggleAudio() {
  // toggle playing state
  playing = !playing;
  
  // make icons show/hide
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";  
  } else {
    play.style.display = "block";
    pause.style.display = "none";
  } 
  
  // play/pause audio
  if (playing) audio.play();
  else audio.pause();
} 

function seekTo() {
  seekto = audio.duration * (progress.value / 100);
  audio.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;
      
  // check if the current track duration is a legible number
  if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration);
    progress.value = seekPosition;
          
    // calculate the time left and the total duration
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
          
    // adding a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_time.textContent = durationMinutes + ":" + durationSeconds;
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());
      

