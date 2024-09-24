"use strict";

const typeGoods = 'food';

//console.log('https://market.com/' + typegoods);

//console.log('https://market.com/' + typegoods + '/' + '10');

console.log('https://market.com/${typeGoods}');

//https://market.com/games/strategy/10
const section = "games";
const type = "strategy";
const page = 10;

console.log(`https://market.com/${section}/${type}/${page}`)