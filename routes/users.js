/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const users = require('../data/users.json');


router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user._id === id);
  if (user) {
    res.send(user);
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = router;
