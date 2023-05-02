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
            if (index == 0) {
                index = audioarray.length-1;
                audio.src = audioarray[index];
                index--;
               } else {
                audio.src = audioarray[index];
                index--;
                console.log(audioarray);
               }
        }
        // document.getElementById("plause").style.display = "none"
        // document.getElementById("play").style.display = ""
function play () {
    audio.play();
    // document.getElementById("plause").style.display = "block"
    // document.getElementById("play").style.display = "none"
}

function pause() { 
  audio.pause(); 
//   document.getElementById("play").style.display = "block"
//   document.getElementById("plause").style.display = "none"
}
// function volumeControl(){
//     audio.onvolumechange();
//     if (condition) {
        
//     } else {
        
//     }
// }