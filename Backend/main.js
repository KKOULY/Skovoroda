var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    // //Налаштування URL за якими буде відповідати сервер
    // //Отримання списку піц
    app.get('/api/get-items-list/', api.getItemsList);
    app.post('/api/create-order/', api.createOrder);

    // get list of compositions
    app.get('/api/get-compositions-list/', api.getCompositionsList);

    //Сторінки
    //Головна сторінка
    app.get('/', pages.mainPage);

    //Сторінка бібліотеки
    app.get('/library.html', pages.libraryPage);

    // read page with id of the composition
    app.get('/read:id.html', pages.readPage);

    //Сторінка біографії
    app.get('/bio.html', pages.bioPage);

    //Сторінка магазину
    app.get('/shop.html', pages.shopPage);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;