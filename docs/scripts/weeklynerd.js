const weeklyNerdButton = document.querySelector('.weeklynerd-button');
const weeklyNerdContent = document.querySelector('.weeklynerd-content');
const weeklyNerdCloseButton = document.querySelector(
    '.weeklynerd-content button'
);

weeklyNerdButton.addEventListener('click', () => {
    weeklyNerdContent.classList.add('visible');
});

weeklyNerdCloseButton.addEventListener('click', () => {
    weeklyNerdContent.classList.remove('visible');
});
