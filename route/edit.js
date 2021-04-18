const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/adminDashUsersEdit/:id', function (request, response) {
    var id = request.params.id;
    connection.query("SELECT * FROM accounts WHERE id =?", [id], function (error, results, fields) {
        if (!error) {
            response.render('adminDashUsersEdit', {
                user: results

            });
        }
        else {
            console.log(error);
        }
    })
});

router.post('/adminDashUsersEdit/:id', function (request, response) {
    var id = request.params.id;
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;

    connection.query('UPDATE accounts SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id], function (error, result, fields) {
        if (!error) {
            response.redirect('/users');
        } else {
            console.log(error);
        }
    })
});
module.exports = router;