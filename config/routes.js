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
var synonymsController = require('../controllers/synonymsController');

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

// Get Synonyms
router.route('/api/syn/:_word')
  .get(synonymsController.getSynonyms);

// CREATE
// Only available if user is logged in
router.route('/api/notes/')
  .post(authenticatedUser, notesController.createNote);

// INDEX
router.route('/api/notes')
  .get(notesController.getNotes);

// INDEX with category filter
router.route('/api/notes/:category')
  .get(notesController.getNotesByCategory);

// SHOW
router.route('/api/notes/:_id')
  .get(notesController.showNote);

// UPDATE
router.route('/api/notes/:_id')
  .put(notesController.updateNote);


// DESTROY
router.route('/api/notes/:_id')
  .delete(notesController.destroyNote);


module.exports = router;
