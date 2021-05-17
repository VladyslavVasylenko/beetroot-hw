"use strict";

let setCard = document.createAttribute('div');

let cliks = 0;

let noShowCards = '<p>We don`t have more cards</p>';

let seeMoreCards = document.getElementById("see-More-Cards");

function clickCards () {
  if (clicks < 36) {
    let element = document.createElement('div');
    element.innerHTML = setCard;
    galleries.appendChild(element);
    clicks++;
  } else {
    let noCards = document.createElement('p');
    noCards.innerHTML = noShowCards;
    galleries.appendChild(noImage);
    seeMoreCards.classList.add('cards--hidden');
  }
}