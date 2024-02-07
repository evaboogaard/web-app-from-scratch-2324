const carouselContainer = document.querySelector('.albums ul');
const upButton = document.querySelector('.albums .up');
const downButton = document.querySelector('.albums .down');
const carouselItems = document.querySelectorAll('.albums ul li');
const albumCovers = document.querySelectorAll('.albums img');
const albumTitle = document.querySelector('.album-title');
const artistName = document.querySelector('.artist-name');
const halfViewportHeight = window.innerHeight / 1.332;

const albumsData = [
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2109877',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2117028',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2116422',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2145623',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2404242',
];

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
            const index = Array.from(item.parentNode.children).indexOf(item);
            updateAlbumTitle(index);
        } else {
            item.classList.remove('active');
        }
    });
}

function updateAlbumTitle(index) {
    const url = albumsData[index];
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            albumTitle.innerHTML = data.album[0].strAlbumStripped;
            artistName.innerHTML = data.album[0].strArtist;
        })
        .catch((error) => {
            console.error('There was a problem fetching the JSON file:', error);
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

const fetchData = (url, index) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            albumCovers[index].src = data.album[0].strAlbumThumb;
            albumTitle.innerHTML = data.album[0].strAlbumStripped; // Always update album title
        })
        .catch((error) => {
            console.error('There was a problem fetching the JSON file:', error);
        });
};

Promise.all(albumsData.map((url, index) => fetchData(url, index))).then(() => {
    console.log('All data loaded successfully');
});
