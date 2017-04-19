var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var notesController = require('../controllers/notesController');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
	// If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	// Otherwise the request is always redirected to the home page
	res.redirect('/');
}

router.route("/secret")
	.get(authenticatedUser, usersController.secret);

router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);


// CREATE
router.route('/api/notes/')
  .post(notesController.createNote);

// INDEX
router.route('/api/notes')
  .get(notesController.getNotes);

// NEW
// router.route('api/notes/new')
//   .get(notesController.newNote);

// SHOW
router.route('/api/notes/:_id')
  .get(notesController.getNoteById);



// EDIT



// UPDATE



// DESTROY
router.route('/api/notes/:_id')
  .delete(notesController.destroyNote);


module.exports = router;
