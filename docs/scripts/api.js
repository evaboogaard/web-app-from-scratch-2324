const carouselItems = document.querySelectorAll('.albums ul li');
const albumCovers = document.querySelectorAll('.albums img');
const albumTitle = document.querySelector('.album-title');
const albumArtist = document.querySelector('.album-artist');
const artistName = document.querySelector('.artist-name');

let currentActiveIndex = 0;

const albumsData = [
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2109877',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2117028',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2116422',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2145623',
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2404242',
];

const audioEl = document.querySelector('audio');
const audioFiles = [
    './audio/pinkfloyd.mp3',
    './audio/jeffwayne.mp3',
    './audio/prodigy.mp3',
    './audio/queen.mp3',
    './audio/jockstrap.mp3',
];

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
            albumCovers[index].src = data.album[0].strAlbumThumb;
            albumTitle.innerHTML = data.album[0].strAlbumStripped;
            albumArtist.innerHTML = data.album[0].strArtist;
            artistName.innerHTML = data.album[0].strArtist;

            audioEl.src = audioFiles[index];
        })
        .catch((error) => {
            console.error('There was a problem fetching the JSON file:', error);
        });
}

function setInitialData() {
    updateAlbumTitle(0); //
}

function updateActiveAlbum(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(carouselItems).indexOf(entry.target);
            currentActiveIndex = index;
            updateAlbumTitle(index);
        }
    });
}

const observer = new IntersectionObserver(updateActiveAlbum, {
    root: null,
    threshold: 0.5, // if 50% of the el is visible, the active class gets updated
});

carouselItems.forEach((item) => observer.observe(item));

Promise.all(albumsData.map((url, index) => updateAlbumTitle(index))).then(
    () => {
        console.log('All data loaded successfully');
        setInitialData();
    }
);
