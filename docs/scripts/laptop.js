const laptopButtonEl = document.querySelector('.laptop-button');
laptopButtonEl.addEventListener('click', () => {
    document.querySelector('.laptop-content').classList.toggle('visible');
});
