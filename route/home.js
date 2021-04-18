const express = require('express');
const connection = require('../connection/connection');
const router = express.Router();



router.get('/', function (request, response) {
    connection.query('SELECT * FROM content', function (error, result, fields) {
        if (!error) {
            response.render('home', { contents: result });
        } else {
            console.log(error);
        }
    })
});




router.get('/homeLogin', function (request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM content', function (error, result, fields) {
            if (!error) {
                response.render('homeLogin', { contents: result });
            } else {
                console.log(error);
            }
        })

    }

    else {
        response.send('Please login to view this page!');
    }

});
router.get('/homeLoginA', function (request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM content', function (error, result, fields) {
            if (!error) {
                response.render('homeLoginA', { contents: result });
            } else {
                console.log(error);
            }
        })

    }

    else {
        response.send('Please login to view this page as an Admin!');
    }

});
module.exports = router;