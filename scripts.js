document.querySelector('.infocard');
let tituloGen1 = document.querySelector('#gen-1');
tituloGen1.innerHTML = "Generasión 1 Pokimon";

let primerPokemon = document.querySelector('.infocard');
primerPokemon.style.backgroundColor = 'red';

let currentURL = document.location.href;
console.log(currentURL);

let currentDomain = document.location.hostname;
console.log(currentDomain);

console.log(document.querySelectorAll('img'));

let images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

let infocard = document.querySelectorAll('.infocard-lg-data text-muted');
for (let i = 0; i < infocard.length; i++) {
    if (infocard[i].querySelector('itype flying')) {
        infocard[i].computedStyleMap.backgroundColor = 'red';
    }
}
