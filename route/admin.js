const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');


router.get('/adminDash', function (request, response) {
    response.render('adminDash');
});
router.get('/adminDashHighlight', function (request, response) {
    response.render('adminDashHighlight');
});

router.get('/adminAddUser', function (request, response) {
    response.render('adminAddUser');
});



router.get('/users', function (request, response) {
    console.log(request.session.username);
    connection.query("SELECT * FROM accounts", function (error, results, fields) {
        if (!error) {
            response.render('users', {
                user: results,
                username: request.session.username
            });
        }
    })
});



module.exports = router;