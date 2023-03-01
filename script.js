// const audioMbira = document.querySelector('.button__mbira + audio');
// const playerButtons = document.querySelectorAll('.player__button');
// const buttonMbira = document.querySelector('.button__mbira');


// let count = 0;
// const playPause = () => {
//     if (count === 0) {
//         count = 1;
//         audioMbira.play();
//         buttonMbira.innerHTML = '| | &nbsp THUMB PIANO';
//     } 
//     else {
//         count = 0;
//         audioMbira.pause();
//         buttonMbira.innerHTML = '&#9658 &nbsp THUMB PIANO';
//     }
// };

 
//     buttonMbira.addEventListener('click', event => {
//         let clickedValue = [`${event.currentTarget.classList.value}`.replace(' ', ', ')];
//         console.log(clickedValue)

//         // let clickedAudio = document.querySelector(`${clickedValue} + audio`)
//         // console.log(clickedAudio)
        
//     });

//     /////////////////////////////////////////////////////////////////////////

const audioData = [
    ['mbira', {
        url : 'audio/Mbira.mp3',
        name: 'thumb piano'
    }],
    ['cretan', {
        url: 'audio/Sa-dakri.mp3',
        name: 'cretan song'
    }],
    ['guitar', {
        url: 'audio/guitar.mp3',
        name: 'guitar impro'
    }],
    ['chant', {
        url: 'audio/chant.mp3',
        name: 'indian chant'
    }]
];
console.log(audioData[0])
