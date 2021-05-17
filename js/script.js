"use strict";

let clicks = 0;

let noShowCards = '<p class="desk">We don`t have more cards.</p>';

let seeMoreCards = document.getElementById("cards");

let suits = [
  '<div class="card"><div class="diamond-shape"></div></div>', 
  // "spades", 
  // "hearts", 
  // "clubs"
];

let values = [
  '<p class=title-card>A</p>', 
  // "6", 
  // "7", 
  // "8", 
  // "9", 
  // "10", 
  // "J", 
  // "Q", 
  // "K"
];

let setCard = suits.flatMap(suit => values.map(value => `${value} ${suit}` + '<br>'));

// let setCard = document.getElementsByClassName("card");

seeMoreCards.onclick = function () {
  if (clicks < 1) {
    let element = document.createElement('div');
    element.innerHTML = setCard;
    cards.appendChild(element);
    clicks++;
  } else {
    let noCards = document.createElement('p');
    noCards.innerHTML = noShowCards;
    desk.appendChild(noCards);
    seeMoreCards.classList.add('desk--hidden');
  }
}