/*
###############
          PASSPORT OPEN
###############
*/

const passportEl = document.querySelector('.passport');
const passportButton = document.querySelector('.passport-button');
const passportContent = document.querySelector('.passport-content');

passportButton.addEventListener('click', () => {
    passportEl.classList.add('content-shown');
});

passportContent.addEventListener('click', () => {
    passportEl.classList.remove('content-shown');
});

/*
###############
          DYNAMIC DATA
###############
*/

const evaData =
    // 'https://evaboogaard.github.io/web-app-from-scratch-2324/me.json';
    'me.json';
const avatarEl = document.querySelector('.avatar');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const personalityEl = document.querySelector('.description');
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
        personalityEl.innerHTML = data.description;
        strengthsEl.innerHTML = data.strengths;
        weaknessesEl.innerHTML = data.weaknesses;
        habitatEl.innerHTML = data.habitat[0].value;

        // objecten in li items gooien
        let ulElement = document.querySelector('.stats-list');
        ulElement.innerHTML = '';
        data.stats.forEach((obj) => {
            let li = document.createElement('li');
            li.textContent = `${obj.title}: ${obj.value}`;
            ulElement.appendChild(li);
        });
    })
    .catch((error) => {
        console.error('There was a problem fetching the JSON file:', error);
    });
