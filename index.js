'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
var express = require('express');
var app = express();

var Calculator = require('./models/Calculator');
var calculator = new Calculator();
var message = 'Переданные аргументы некорректны';

app.set('port', process.env.PORT || 5000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    console.time('render');

    var arg1 = 0;
    var arg2 = 0;

    try{

        // Ничего не передали
        if(request.query.arg1 === undefined && request.query.arg2 === undefined){
            response.render('index', {result: ''});
            return;
        }

        arg1 = parseInt(request.query.arg1);
        arg2 = parseInt(request.query.arg2);

        // Проверим корректность
        if(isNaN(arg1) || isNaN(arg2)){
            console.log(message);
            response.render('index', {result: message});
            return;
        }
    }
    catch (exception) {
        console.log(exception);
        response.render('index', {result: exception.message});
        return;

    }

    response.render('index', {result: calculator.multiply(arg1, arg2)});
    console.timeEnd('render');
});

app.listen(app.get('port'), function () {
    console.log('Calculator on port', app.get('port'));
});