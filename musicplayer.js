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

function play () {
    audio.play();
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
}
volumeControl.addEventListener("ondrag", function(){
    audio.volume();
})
