const router = require('express').Router();
const routeCards = require('express').Router();
const path = require('path');

const cards = require(path.join(__dirname, '../data/cards.json'));

routeCards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = routeCards;
