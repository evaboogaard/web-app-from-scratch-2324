const recordPlayerEl = document.querySelector('.recordplayer');
const recordButtonEl = document.querySelector('.vinyl');
const audio = document.querySelector('audio');

document.addEventListener('DOMContentLoaded', () => {
    audio.removeAttribute('controls');
});

recordButtonEl.addEventListener('click', () => {
    recordPlayerEl.classList.toggle('playing');

    // Check the second radio input
    document.getElementById('two').checked = true;

    // Ensure audio playback starts
    if (audio.paused) {
        audio.play().catch((error) => {
            console.error('Failed to play audio:', error);
        });
    } else {
        audio.pause();
    }
});
