const keys = document.querySelectorAll('.key');

for(let i=0 ;i<keys.length;i++){
    keys[i].addEventListener('click',playSound);
}

function playSound() {
    const note = this.dataset.note;
    const audio = new Audio(`audio/${note}.mp3`);
    audio.volume=1.0;
    audio.play();
}
