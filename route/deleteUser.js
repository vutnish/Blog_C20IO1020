const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.post('/delete/:id', function (request, response) {
    var id = request.params.id;


    connection.query('DELETE FROM accounts WHERE id=?', [id], function (error, result, fields) {
        if (!error) {
            response.redirect('/users');
        } else {
            console.log(error);
        }
    })
});
router.post('/deletePost/:id', function (request, response) {
    var id = request.params.id;


    connection.query('DELETE FROM content WHERE id=?', [id], function (error, result, fields) {
        if (!error) {
            response.redirect('/homeLoginA');
        } else {
            console.log(error);
        }
    })
});


module.exports = router;