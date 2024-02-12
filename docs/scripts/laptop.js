const laptopButtonEl = document.querySelector('.laptop-button');
const laptopContentEl = document.querySelector('.laptop-content');
const laptopEl = document.querySelector('.laptop');

laptopButtonEl.addEventListener('click', () => {
    laptopEl.classList.add('content-visible');
});

laptopContentEl.addEventListener('click', () => {
    laptopEl.classList.remove('content-visible');
});
