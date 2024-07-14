const keys = document.querySelectorAll('.key');

// keys.forEach(key => {
//     key.addEventListener('click', () => playSound(key));
// });

for(let i=0 ;i<keys.length;i++){
    keys[i].addEventListener('click',playSound);
}

function playSound() {
    const note = this.dataset.note;
    console.log('sound played');
    console.log(note);
    const audio = new Audio(`audio/${note}.mp3`);
    // const audio=new Audio('audio/A1.mp3');
    audio.volume=1.0;
    // audio.playbackRate=2;
    audio.play();
}
