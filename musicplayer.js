let audio = document.getElementById("audio");
index = 0;
let audioarray = ["../Musicfolder/03 - Joyous Celebration - Big God.mp3", "../Musicfolder/1 Moni Baba kan.mp3",
"../Musicfolder/All around.mp3", "../Musicfolder/As We Pray.mp3", "../Musicfolder/Baba.mp3", "../Musicfolder/Bcus He lives.mp3",
"../Musicfolder/Fiyin folu.mp3", "../Musicfolder/Frank Edward-Mma Mma.mp3", "../Musicfolder/Frank Edwards - I see him.mp3",
"../Musicfolder/Frank-Edwards-Under-The-Canopy.mp3", "../Musicfolder/I'LL SAY YES.mp3", "../Musicfolder/Turn_It_Around.mp3"]
    audio.src = audioarray[index]
    let volumeControl = document.getElementById("volumeControl");
    let musicControl = document.getElementById("musicControl");
    
        function next() {
           if (index == audioarray.length) {
            index = 0;
            audio.src = audioarray[index];
            index++;
           } else {
            audio.src = audioarray[index];
            index++;
            console.log(audioarray);
           }
        }

        function previous () {
           if (index == audioarray.length) {
            index = 0;
            audio.src = audioarray[index];
            index--;
           } else {
            audio.src = audioarray[index];
            index--;
            console.log(audioarray);
           }
        }
        document.getElementById("plause").style.display = "none"
        // document.getElementById("play").style.display = ""
function play () {
    audio.play();
    document.getElementById("plause1").style.display = "block"
    document.getElementById("play1").style.display = "none"
    audioPlay = function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration)
        time.style.width = (audioTime * 100) / audioLength + '%';
        if (audioTime == audioLength && treck < 3) {
            treck++; // then Increase the variable 
            switchTreck(treck); // change track
        // Otherwise we check the same, but the treck variable is greater than or equal to four
        } else if (audioTime == audioLength && treck >= 3) {
            treck = 0; // then we assign treck to zero
            switchTreck(treck); //Change track
        }
    }
}

function pause() { 
  audio.pause(); 
  document.getElementById("play1").style.display = "block"
  document.getElementById("plause1").style.display = "none"
}
volumeControl.addEventListener("ondrag", function(){
    audio.volume();
})
// btnPrev.addEventListener("click", function() {
    // Check that the treck variable is greater than zero
    // if (treck > 0) {
        // treck--; // If true, reduce the variable by one
        // switchTreck(treck); // Change the song.
    // } else { // Otherwise
        // treck = 3; // Assign three
        // switchTreck(treck); // Change the song
    // }
// });

// btnNext.addEventListener("click", function() {
    // Check that the treck variable is greater than three
    // if (treck < 3) { // If so
        // treck++; // increase it by one
        // switchTreck(treck); // Change the song 
    // } else { // Otherwise
        // treck = 0; // Assign a zero to it
        // switchTreck(treck); // Change the song
    // }
// });