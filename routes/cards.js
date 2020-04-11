const router = require('express').Router();
const routeCards = require('express').Router();
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const cards = require(path.join(__dirname, '../data/cards.json'));
/*
routeCards.get('/', (req, res) => {
  res.send(cards);
});
*/
routeCards.get('/', (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
});
module.exports = routeCards;
