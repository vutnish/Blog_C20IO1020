const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/userDash', function (request, response) {
    if (request.session.loggedin) {
        response.render('userDash');

    }

    else {
        response.send('Please login to view this page!');
    }
});

router.get('/editMyInfo', function (request, response) {
    response.render('UserDashEdit');
});


router.get('/myPosts', function (request, response) {
    
    var username = request.session.username;

    connection.query('SELECT * FROM content WHERE username = ?', [username], function (error, result, fields) {
        console.log(username);
        if (!error) {
            response.render('userDashMyPosts', { contents: result });
        } else {
            console.log(error);
        }
    })
});




module.exports = router;