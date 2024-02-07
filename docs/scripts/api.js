const albumCovers = document.querySelectorAll('.albums img');
const carouselItems = document.querySelectorAll('.albums ul li');

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

const jockstrapData =
    'https://www.theaudiodb.com/api/v1/json/2/album.php?m=2404242';

fetch(jockstrapData)
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
