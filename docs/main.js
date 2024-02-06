/*
###############
          CAROUSEL
###############
*/

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

/*
###############
          EXTERNAL API
###############
*/

const albumCovers = document.querySelectorAll('.albums img');

const pinkFloydData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2109877';

fetch(pinkFloydData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        albumCovers[0].src = data.album[0].strAlbumThumb;

        if (carouselItems[0].classList.contains('active')) {
            console.log('pf active!');
        }
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });

const jeffWayneData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2117028';

fetch(jeffWayneData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        albumCovers[1].src = data.album[0].strAlbumThumb;

        if (carouselItems[1].classList.contains('active')) {
            console.log('jw active!');
        }
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });

const prodigyData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2116422';

fetch(prodigyData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        albumCovers[2].src = data.album[0].strAlbumThumb;
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });

const queenData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2145623';

fetch(queenData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        albumCovers[3].src = data.album[0].strAlbumThumb;
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });

const aphexTwinData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2113905';

fetch(aphexTwinData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        albumCovers[4].src = data.album[0].strAlbumThumb;
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });

/*
###############
          PERSONAL DATA
###############
*/

const evaData =
    // 'https://evaboogaard.github.io/web-app-from-scratch-2324/me.json';
    'me.json';
const avatarEl = document.querySelector('.avatar');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const personalityEl = document.querySelector('.description');
const statsEl = document.querySelector('.skills');
const strengthsEl = document.querySelector('.strengths');
const weaknessesEl = document.querySelector('.weaknesses');
const habitatEl = document.querySelector('.habitat');

fetch(evaData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        avatarEl.src = data.avatar;
        nameEl.innerHTML = data.name;
        ageEl.innerHTML = data.age;
        personalityEl.innerHTML = data.personality;
        habitatEl.innerHTML = data.habitat[0];

        console.log(data.habitat[0]);
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });
