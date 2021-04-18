const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.post('/register', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    if (username && password && email) {
        connection.query("INSERT INTO accounts ( username, password, email) VALUES('" + request.body.username + "', '" + request.body.password + "', '" + request.body.email + "')", [username, password, email], function () {
            response.redirect('/');
        });
    }
});

router.post('/registerA', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    if (username && password && email) {
        connection.query("INSERT INTO accounts ( username, password, email) VALUES('" + request.body.username + "', '" + request.body.password + "', '" + request.body.email + "')", [username, password, email], function () {
            response.redirect('/users');
        });
    }
});

module.exports = router;