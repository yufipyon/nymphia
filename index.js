            // initiate variables
            let track_name = document.querySelector(".songtitle");
 
            let playpause_btn = document.querySelector(".playpause-track");
            let next_btn = document.querySelector(".next-track");
            let prev_btn = document.querySelector(".prev-track");
     
            let seek_slider = document.querySelector(".seek_slider");
            let curr_time = document.querySelector(".current-time");
            let total_duration = document.querySelector(".total-duration");
     
            let track_index = 0;
            let isPlaying = false;
            let updateTimer;
     
            // create new audio element
            let curr_track = document.getElementById("music");
     
            //
            // DEFINE YOUR SONGS HERE!!!!!
            // MORE THAN FOUR SONGS CAN BE ADDED!!
            // JUST ADD ANOTHER BRACKET WITH NAME AND PATH
            // CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
            let track_list = [
                {
                    name:"Feel Alive - R3BIRTH",
                    path:"Feel Alive.mp3"
                },
                {
                    name:"Holiday Holiday - Cerise Bouquet",
                    path:"Holiday Holiday.mp3"
                },
                {
                    name:"Eternal Light - DiverDiva",
                    path:"Eternal Light.mp3"
                },
                {
                    name:"Guitar, Loneliness and Blue Planet - kessoku band",
                    path:"Guitar, Loneliness and Blue Planet.mp3"
                },
                {
                    name:"Flying on Faith - Chung Ha",
                    path:"Flying on Faith.mp3"
                }
            ];
            //
            //
            //
            //
            //
     
            function loadTrack(track_index) {
                clearInterval(updateTimer);
                resetValues();
     
                // load a new track
                curr_track.src = track_list[track_index].path;
                curr_track.load();
     
                // update details of the track
                track_name.textContent = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;
     
                // set an interval of 1000 milliseconds for updating the seek slider
                updateTimer = setInterval(seekUpdate, 1000);
     
                // move to the next track if the current one finishes playing 
                curr_track.addEventListener("ended", nextTrack);
            }
     
            // reset values
            function resetValues() {
                curr_time.textContent = "0:00";
                total_duration.textContent = "0:00";
                seek_slider.value = 0;
            }
     
            // checks if song is playing
            function playpauseTrack() {
                if (!isPlaying) playTrack();
                else pauseTrack();
            }
     
            // plays track when play button is pressed
            function playTrack() {
                curr_track.play();
                isPlaying = true;
     
                // replace icon with the pause icon
                playpause_btn.innerHTML = '<button><i class="fas fa-pause"></i></button>';
            }
     
            // pauses track when pause button is pressed
            function pauseTrack() {
                curr_track.pause();
                isPlaying = false;
     
                // replace icon with the play icon
                playpause_btn.innerHTML = '<button><i class="fas fa-play"></i></button>';
            }
     
            // moves to the next track
            function nextTrack() {
                if (track_index < track_list.length - 1)
                    track_index += 1;
                else track_index = 0;
                loadTrack(track_index);
                playTrack();
            }
     
            // moves to the previous track
            function prevTrack() {
                if (track_index > 0)
                    track_index -= 1;
                else track_index = track_list.length;
                loadTrack(track_index);
                playTrack();
            }
     
            // seeker slider
            function seekTo() {
                seekto = curr_track.duration * (seek_slider.value / 100);
                curr_track.currentTime = seekto;
            }
     
            function seekUpdate() {
                let seekPosition = 0;
     
                // check if the current track duration is a legible number
                if (!isNaN(curr_track.duration)) {
                    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                    seek_slider.value = seekPosition;
     
                // calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
     
                // adding a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = durationMinutes; }
     
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
              }
            }
     
            // load the first track in the tracklist
            loadTrack(track_index);

// <![CDATA[
    var speed=150; // speed colours change, 1 second = 1000
    var glow=3; // can be set from '0' for no glow, to 10
    var raincol=new Array("#FFDFDF", "#FFCCCC", "#FFDFDF", "#FFCCCC", "#FFDFDF", "#FFCCCC", "#FFD1DA", "#F1D4E5", "#FFD1DA", "#F1D4E5", "#FFD1DA", "#F1D4E5"); // change the colours if you want to
    var alink="http://xat.me/nymphia"; // page to link text to (set to ="" for no link)
    
    /****************************
    * Rainbow Text Effect *
    *(c)2003-13 mf2fm web-design*
    * http://www.mf2fm.com/rv *
    * DON'T EDIT BELOW THIS BOX *
    ****************************/
    var rainbow, raintxt, raincnt=0;
    
    function addLoadEvent(funky) {
    var oldonload=window.onload;
    if (typeof(oldonload)!='function') window.onload=funky;
    else window.onload=function() {
    if (oldonload) oldonload();
    funky();
    }
    }
    
    addLoadEvent(regenbogen);
    
    function regenbogen() { if (document.getElementById) {
    var i, rainbeau;
    rainbow=document.getElementById("text01");
    raintxt=rainbow.firstChild.nodeValue;
    while (rainbow.childNodes.length) rainbow.removeChild(rainbow.childNodes[0]);
    for (i=0; i<raintxt.length; i++) {
    rainbeau=document.createElement("span");
    rainbeau.setAttribute("id", "rain"+i);
    rainbeau.appendChild(document.createTextNode(raintxt.charAt(i)));
    if (alink) {
    rainbeau.onclick=function() { top.location.href=alink; }
    }
    rainbow.appendChild(rainbeau);
    }
    rainbow=setInterval ("raining()", speed);
    }}
    
    function raining() {
    var i, c;
    for (i=0; i<raintxt.length; i++) {
    c=raincol[(i+raincnt)%raincol.length];
    document.getElementById("rain"+i).style.color=c;
    if (glow) document.getElementById("rain"+i).style.textShadow=c+" 0px 0px "+glow+"px";
    }
    raincnt++;
    }
    // ]]>

    dragElement(document.getElementById("wrapper"));
 
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById("containerheader")) {
        // if present, the header is where you move the DIV from:
        document.getElementById("containerheader").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
     
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
     
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
     
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    

    dragElement(document.getElementById("wrapper2"));
 
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById("containerheader")) {
        // if present, the header is where you move the DIV from:
        document.getElementById("containerheader").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
     
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
     
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
     
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    var elem = document.getElementById('player'),
    fadeInInterval,
    fadeOutInterval;
    
document.getElementById('fade-in').addEventListener('click',function(){
    
clearInterval(fadeInInterval);
clearInterval(fadeOutInterval);

elem.fadeIn = function(timing) {
var newValue = 0;

elem.style.display = 'block';
elem.style.opacity = 0;

fadeInInterval = setInterval(function(){ 

if (newValue < 1) {
newValue += 0.01;
} else if (newValue === 1) {
clearInterval(fadeInInterval);   
}

elem.style.opacity = newValue;

}, timing);

}

elem.fadeIn(2);
});



document.getElementById('fade-out').addEventListener('click',function(){
    
clearInterval(fadeInInterval);
clearInterval(fadeOutInterval);

elem.fadeOut = function(timing) {
var newValue = 1;
elem.style.opacity = 1;

fadeOutInterval = setInterval(function(){ 

if (newValue > 0) {
newValue -= 0.01;
} else if (newValue < 0) {
elem.style.opacity = 0;
elem.style.display = 'none';
clearInterval(fadeOutInterval);
}

elem.style.opacity = newValue;

}, timing);

}

elem.fadeOut(2);
});

function addEvent(){
    document.body.addEventListener("click", play)
  }
 function play() {
   var audio = document.getElementById("audio");
   audio.play();
 }

