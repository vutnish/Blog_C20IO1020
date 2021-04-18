
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');

/*router direction*/
var login = require('./route/login');
var home = require('./route/home');
var admin = require('./route/admin');
var register = require('./route/register');
var users = require('./route/users');
var loginAdmin = require('./route/loginAdmin');
var addPost = require('./route/addPost');
var edit = require('./route/edit');
var deleteUser = require('./route/deleteUser');
var single = require('./route/single');
var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload());
app.use(express.static('/css'))
app.use(express.static('/js'))
app.use(express.static('/materials'))

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/materials', express.static(__dirname + '/materials'))

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use('/', login);
app.use('/', home);
app.use('/', admin);
app.use('/', register);
app.use('/', users);
app.use('/', loginAdmin);
app.use('/', addPost);
app.use('/', edit);
app.use('/', deleteUser);
app.use('/', single);

app.listen(process.env.SERVER_PORT);
