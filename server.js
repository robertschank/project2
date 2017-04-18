// import requirements
const express      = require('express');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const passport     = require('passport');
const flash        = require('connect-flash');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

mongoose.connect('mongodb://localhost/local-authentication-with-passport');

// Express app called app
let app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// static files found in public folder
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));// What does this do? 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function (req, res, next) {
res.locals.currentUser = req.user;
next();
});

var routes = require('./config/routes');
app.use(routes);

app.listen(3000);