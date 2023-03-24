                //////////////////////////////////////
                        // **** PLAYER ****
                //////////////////////////////////////
                

const audioData = {
    'mbira': {
        url : 'audio/Mbira.mp3',
        name: 'thumb piano'
    },
    'cretan': {
        url: 'audio/Sa-dakri.mp3',
        name: 'cretan song'
    },
    'guitar': {
        url: 'audio/guitar.mp3',
        name: 'guitar impro'
    },
    'chant': {
        url: 'audio/chant.mp3',
        name: 'indian chant'
    }
};

////////////////// *** BUTTONS HTML *** ////////////////////////
const musicPlayer = document.querySelector('.music__player');
const audioDataArray = Object.entries(audioData);


audioDataArray.forEach(track => {
    musicPlayer.insertAdjacentHTML('beforeend', 

    `<div class="player__audio">

        <button class="${track[0]}">
            <ion-icon name="play-circle-outline"></ion-icon> &nbsp ${track[1].name.toUpperCase()} 
        </button>

        <audio id="${track[0]}" class="audio audio__${track[0]}">
            <source src="${track[1].url}" type="audio/mp3">
        </audio>
    </div>`)
});
////////////



////////////////////// *** PLAY FUNCTION *** /////////////////////
let count = 0;

const playPause = (song, object) => {
    
    let track = document.querySelector(`#${song}`);
    let button = document.querySelector(`.${song}`);

    if (count === 0) {
        count = 1;
        track.play();
        button.innerHTML = `<ion-icon name="pause-circle-outline"></ion-icon> &nbsp ${object.name.toUpperCase()}`;
    } 
    else {
        count = 0;
        track.pause();
        button.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon> &nbsp ${object.name.toUpperCase()}`;
    };
};
///////////





/////////////// *** PLAY ON CLICK EVENT *** /////////////////////////
const buttons = document.querySelectorAll('.mbira, .guitar, .chant, .cretan');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let data = button.classList.value;
        playPause(data, audioData[data]);
    });
});
/////////




//////////////// *** RESET BUTTON AFTER SONG ENDS *** ///////////////////////////
const allAudio = document.querySelectorAll('#mbira, #guitar, #chant, #cretan');

allAudio.forEach(track => {
    track.addEventListener('ended', () => {
        count = 0;
        let trackName = track.classList.value.split(' ')[1].substring(7);
        let trackButton = document.querySelector(`.${trackName}`);
        trackButton.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon> &nbsp ${audioData[`${trackName}`].name.toUpperCase()}`
    });
});
////////




//////////////////// *** Q&A SECTION *** ////////////////////////////////
const codingQuestions = [...document.querySelectorAll('.coding__question')];

codingQuestions.forEach(question => {
    const questionClass = question.classList.value.split(' ').splice(1).toString();
    const answer = document.querySelector(`.${questionClass} + p`);

    question.addEventListener('click', () => {
        answer.classList.toggle('coding__answer_show');
    });
});
////////////
