// const audioMbira = document.querySelector('.audio__mbira');
const playerButtons = document.querySelectorAll('.player__button');
// const buttonMbira = document.querySelector('.button__mbira');

let count = 0;
const playPause = () => {
    if (count === 0) {
        count = 1;
        audio.play();
        // buttonMbira.innerHTML = '| | THUMB PIANO - ZIMBABWE';
    } 
    else {
        count = 0;
        audio.pause();
        // buttonMbira.innerHTML = '&#9658 THUMB PIANO -ZIMBABWE';
    }
};

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.classList.value)
        playPause();
    });
})