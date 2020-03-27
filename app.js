var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('views/index.html');
});

// запускаем сервер на порту 8080
app.listen(8080);