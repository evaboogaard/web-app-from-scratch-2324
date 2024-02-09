const recordPlayerEl = document.querySelector('.recordplayer');
const recordButtonEl = document.querySelector('.vinyl');
const audio = document.querySelector('audio');
const speedInputs = document.querySelectorAll('input[name="speed"]');

document.addEventListener('DOMContentLoaded', () => {
    audio.removeAttribute('controls');
});

recordButtonEl.addEventListener('click', () => {
    recordPlayerEl.classList.toggle('playing');

    document.getElementById('two').checked = true;

    if (audio.paused) {
        audio.play().catch((error) => {
            console.error('Failed to play audio:', error);
        });
    } else {
        audio.pause();
    }
});

speedInputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.checked) {
            if (input.value === 'one') {
                audio.playbackRate = 0.6;
            }
            if (input.value === 'three') {
                audio.playbackRate = 1.4;
            } else {
                audio.playbackRate = 1;
            }
        }
    });
});
