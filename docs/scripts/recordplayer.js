const recordPlayerEl = document.querySelector('.recordplayer');
const recordButtonEl = document.querySelector('.vinyl');
const audio = document.querySelector('audio');
const speedInputs = document.querySelectorAll('input[name="speed"]');
const vinylCrackingAudio = new Audio('./audio/vinyl.mp3');

vinylCrackingAudio.volume;

document.addEventListener('DOMContentLoaded', () => {
    audio.removeAttribute('controls');
});

recordButtonEl.addEventListener('click', () => {
    recordPlayerEl.classList.toggle('playing');

    document.getElementById('two').checked = true;

    if (audio.paused) {
        vinylCrackingAudio.play();
        setTimeout(function () {
            audio.play();
        }, 2000);
    } else {
        vinylCrackingAudio.pause();
        audio.pause();
    }
});

speedInputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.checked) {
            if (input.value === 'one') {
                audio.playbackRate = 0.5;
            }
            if (input.value === 'three') {
                audio.playbackRate = 1.5;
            } else {
                audio.playbackRate = 1;
            }
        }
    });
});
