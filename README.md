# Задание на настройку инфраструктуры проекта для ШРИ 2016

[![Build Status](https://travis-ci.org/choochoochoo/task6-shri.svg?branch=master)](https://travis-ci.org/choochoochoo/task6-shri)
[![bitHound Overall Score](https://www.bithound.io/github/choochoochoo/task6-shri/badges/score.svg)](https://www.bithound.io/github/choochoochoo/task6-shri)

## Running Locally

Проект доступен по следующему тестовому URL: https://pacific-peak-12705.herokuapp.com/
Ссылка на uptimerobot https://uptimerobot.com/dashboard.php#

## Логи

### При запуске записывается информация

* О начале и конец компиляции (slug compilation), я так понял это отличается для разных платформ, т.е для npm ставится
npm зависимости, для ruby on rails gem и т.д.
* Номер релизца и автора ( Release v9 created by soloviev.dmitriy.serg@yandex.ru )
* Номер deploy и автор (Deploy ed0b51f by soloviev.dmitriy.serg@yandex.ru )
* Операция ( Restarting )
* Стартовый скрипт (Starting process with command `node index.js` )
* Состояние ( State changed from starting to up )
* Кастомные логи через (console.log) ( Calculator on port 29076 )

### Heroku Router - в процессе жизненного цикла в лог выводится сапросы сделанные на сервер
( каждый запрос содержит следующцю информацию )

* at=info
* Метод и адрес и параметры ( method=GET path="/?arg1=2&arg2=3" )
* Хост (  host=pacific-peak-12705.herokuapp.com )
* Номер запроса ( request_id=eb70abcc-437d-4fd6-8934-28130f96d292 )
* fwd="87.245.145.34"
* dyno=web.1
* connect=1ms
* service=4ms
* Статус ( status=200 )
* bytes=805
