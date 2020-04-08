const path = require('path');
const express = require('express');

const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам

app.use('/users', routeUsers);//  Запуск роутера
app.use('/cards', routeCards);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

