// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
let names = [`Charlie`, `Samip`, `Ali`];
function writeCards(names) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }
  return cards;
}
writeCards(names);

function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}
