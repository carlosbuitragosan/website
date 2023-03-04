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


const allAudio = document.querySelectorAll('#mbira, #guitar, #chant, #cretan');
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

const buttons = document.querySelectorAll('.mbira, .guitar, .chant, .cretan');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let data = button.classList.value;
        playPause(data, audioData[data]);
    });
});

allAudio.forEach(track => {
    track.addEventListener('ended', () => {
        console.log(track.id.value)
        // let button = document.querySelector(`${track.id.value} + button`);
        // console.log(button);
        track.pause();
    });
});




                ///////////////////////////////////////
                        // *** CODING SECTION ***
                ///////////////////////////////////////

const codingQuestions = [...document.querySelectorAll('.coding__question')];
const codingAnswers = [...document.querySelectorAll('.coding__answer')];

codingQuestions.forEach(question => {
    const questionClass = question.classList.value.split(' ').splice(1).toString();
    const answer = document.querySelector(`.${questionClass} + p`);

    question.addEventListener('click', () => {
        const activeAnswer = document.querySelector('.coding__answer_show');
        activeAnswer.classList.remove('coding__answer_show');
        answer.classList.toggle('coding__answer_show');
    })
})

