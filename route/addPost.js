const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');


router.get('/addPostbtn', function (request, response) {

    response.render('addPost', {
        username: request.session.username
    });
});


router.post('/addPost', function (request, response) {
    var title = request.body.title;
    var texts = request.body.texts;
    var image = request.files.image;
    var username = request.body.username;
    var fileName = image.name;
    image.mv('./materials/' + fileName);

    if (title && texts && image && username) {
        connection.query("INSERT INTO content (title, texts, image,username) VALUES(?,?,?,?)", [title, texts, fileName, username],
            function (error, results, fields) {
                console.log(results);
                if (!error) {
                    response.redirect('/homeLogin');

                } else {
                    console.log(error);
                }
            });
    }
});

module.exports = router;
