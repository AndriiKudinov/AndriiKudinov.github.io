let paimonImage = document.querySelector('img');

paimonImage.onclick = function() {
    let paimonSrc = paimonImage.getAttribute('src');
    if(paimonSrc === 'images/nandayo.jpg') {
        paimonImage.setAttribute('src', 'images/paimon2.jpg');
    } else {
        paimonImage.setAttribute('src', 'images/nandayo.jpg');
    }
}   

let userButton = document.querySelector("#user");
let musicButton = document.querySelector("#music");
let heading = document.querySelector('h1');
let backgroundAudio = document.querySelector("audio");

function doMusic() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        musicButton.textContent = 'Pause';
    } else {
        backgroundAudio.pause();
        musicButton.textContent = 'Play';
    }
}

musicButton.onclick = function() {
    doMusic();
}

function setUserName() {
    let userName = prompt('Please enter your name.');
    if(userName === "" || userName === null) {
        userName = 'Gamer';
    }
    localStorage.setItem('name', userName);
    heading.textContent = 'Gacha will ruin our lifus! You are not exception, ' + userName + '.';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent =  'Gacha will ruin our lifus! You are not exception, ' + storedName + '.'; 
}

userButton.onclick = function() {
    setUserName();
}