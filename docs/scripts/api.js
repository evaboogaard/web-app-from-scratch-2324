const carouselContainer = document.querySelector('.albums ul');
const upButton = document.querySelector('.albums .up');
const downButton = document.querySelector('.albums .down');
const carouselItems = document.querySelectorAll('.albums ul li');
const albumCovers = document.querySelectorAll('.albums img');
const albumTitle = document.querySelector('.album-title');
const albumArtist = document.querySelector('.album-artist');
const artistName = document.querySelector('.artist-name');
const halfViewportHeight = window.innerHeight / 1.332;

let currentActiveIndex = 0;

const albumsData = [
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2109877',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2117028',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2116422',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2145623',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2404242',
];

// const audioFiles = [
//     './audio/pinkfloyd.mp3',
//     './audio/jeffwayne.mp3',
//     './audio/prodigy.mp3',
//     './audio/queen.mp3',
//     './audio/jockstrap.mp3',
// ];

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
            albumArtist.innerHTML = data.album[0].strArtist;
            artistName.innerHTML = data.album[0].strArtist;
        })
        .catch((error) => {
            console.error('There was a problem fetching the JSON file:', error);
        });
}

function setInitialData() {
    updateAlbumTitle(0); // Assure Pink Floyd is loaded as the first data
}

upButton.addEventListener('click', () => {
    if (currentActiveIndex > 0) {
        currentActiveIndex--;
        carouselItems[currentActiveIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        updateAlbumTitle(currentActiveIndex);
    }
});

downButton.addEventListener('click', () => {
    if (currentActiveIndex < albumsData.length - 1) {
        currentActiveIndex++;
        carouselItems[currentActiveIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        updateAlbumTitle(currentActiveIndex);
    }
});

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
        })
        .catch((error) => {
            console.error('There was a problem fetching the JSON file:', error);
        });
};

Promise.all(albumsData.map((url, index) => fetchData(url, index))).then(() => {
    console.log('All data loaded successfully');
    setInitialData();
});
