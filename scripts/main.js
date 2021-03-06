let paimonImage = document.querySelector('img');

paimonImage.onclick = function() {
    let paimonSrc = paimonImage.getAttribute('src');
    if(paimonSrc === 'images/nandayo.jpg') {
        paimonImage.setAttribute('src', 'images/paimon2.jpg');
    } else {
        paimonImage.setAttribute('src', 'images/nandayo.jpg');
    }
}   

let heading = document.querySelector('h1');
let userButton = document.querySelector('button');

function setUserName() {
    let userName = prompt('Please enter your name.');
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