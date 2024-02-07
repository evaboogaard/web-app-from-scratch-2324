const recordPlayerEl = document.querySelector('.recordplayer');
const recordButtonEl = document.querySelector('.vinyl');

recordButtonEl.addEventListener('click', () => {
    recordPlayerEl.classList.toggle('playing');
});
