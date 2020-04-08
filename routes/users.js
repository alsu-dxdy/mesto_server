const routeUsers = require('express').Router();
const path = require('path');

const users = require(path.join(__dirname, '../data/users.json'));

routeUsers.get('/', (req, res) => {
  res.send(users);
});

routeUsers.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user._id === id);
  if (user) {
    res.send(user);
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = routeUsers;
