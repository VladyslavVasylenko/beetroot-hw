"use strict";

let cliks = 0;

let noShowCards = '<p>We don`t have more cards</p>';

let seeMoreCards = document.getElementById("see-More-Cards");

let suits = ["diamonds", "spades", "hearts", "clubs"];

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let setCard = suits.flatMap(suit => values.map(value => `${value} of ${suit}`));

//console.log(setCard);

function clickCards () {
  if (clicks < 36) {
    let element = document.createElement('div');
    element.innerHTML = setCard;
    see-More-Cards.appendChild(element);
    clicks++;
  } else {
    let noCards = document.createElement('p');
    noCards.innerHTML = noShowCards;
    see-More-Cards.appendChild(noImage);
    seeMoreCards.classList.add('cards--hidden');
  }
}