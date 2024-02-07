const carouselContainer = document.querySelector('.albums ul');
const upButton = document.querySelector('.albums .up');
const downButton = document.querySelector('.albums .down');
const carouselItems = document.querySelectorAll('.albums ul li');

const halfViewportHeight = window.innerHeight / 1.332;

// chatGPT prompt: i have a carousel in my website. i want it that if one of the li items is 'active' or like centered on screen, it gets a class called active on it. (insert the code i had)
function setActiveItem() {
    const scrollPosition = carouselContainer.scrollTop;
    const containerHeight = carouselContainer.clientHeight;

    carouselItems.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;
        const itemBottom = itemTop + itemHeight;

        if (
            itemTop <= scrollPosition + containerHeight / 2 &&
            itemBottom >= scrollPosition + containerHeight / 2
        ) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

carouselContainer.addEventListener('scroll', setActiveItem);

upButton.addEventListener('click', () => {
    carouselContainer.scrollTo({
        top: carouselContainer.scrollTop - halfViewportHeight,
        behavior: 'smooth',
    });
});

downButton.addEventListener('click', () => {
    carouselContainer.scrollTo({
        top: carouselContainer.scrollTop + halfViewportHeight,
        behavior: 'smooth',
    });
});

setActiveItem();
