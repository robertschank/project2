console.log("Sanity Check: JS is working!");
let tester = 'tester';

let sampleObj = {
	category: null,
	samples: [],
	clickCount: 0,
};

let synObj = {
	keyWord: '',
	syns: [''],
};

$(document).ready(function(){
	// When user selects a category from dropdown:
	$('.dropdown').click(function(event){
		// reset clickCount if a new category is selected
		if (sampleObj.category !== $(this).data("category")) {
			console.log('NEW CATEGORY');
			clickCount = 0;
		sampleObj.category = $(this).data("category");
		console.log('category: ' + sampleObj.category); // Get the data-category
		// set choose button to text category HTML
		$('#chooseButton').text($(this).text());
		}
  });

	// insertNoteButton click
	$('#viewSampleButton').click(function() {
		console.log('viewSampleButton CLICKED!');
				console.log('sampleObj.samples.length: ' + sampleObj.samples.length);
		if (sampleObj.samples.length === 0) {
		// ajax call to getNotesbyCategory

		console.log('calling ajax... ');
			$.ajax({
				method: 'GET',
				url: '/api/notes/' + sampleObj.category,
				success: getNotesByCategorySuccess,
				error: getNotesByCategoryError
			});			
		}
	});

	// When the text area is clicked	
	$('#textareaDiv').click(function() {
		console.log('HELLO from textareaDiv!');
		// store the value of string in the text area
		let textareaString = $('#textarea').val();
		// Find cursor position is text area
		let pos =$('#textarea').getCursorPosition();

		let selectedWord = findWordAtPos(pos, textareaString);
		if (selectedWord.length === 0) {return console.log('no word selected');}
		$.ajax({
			method: 'GET',
			url: '/api/syn/' + selectedWord,
			success: synSuccess,
			error: synError
		});
	});

	// testButton click
	$('#testButton').click(function() {
		let pos =$('#textarea').getCursorPosition();
		console.log('pos: ' + pos);
		let textareaString = $('#textarea').val();
		console.log('initial click char at pos: ' + textareaString.charAt(pos));
		let selectedWord = findWordAtPos(pos, textareaString);
		$(this).button('reset');
		$.ajax({
			method: 'GET',
			url: '/api/syn/' + selectedWord,
			success: synSuccess,
			error: synError
		});
	});
});
// ^^ End of document.ready ^^

function findWordAtPos(pos, textareaString) {
	// set i to the cursor position
	let i = pos;
	// instantiate selectedWord
	let selectedWord = '';

	// keep moving "backwards" along the textString
	// until we reach whitespace, aka the start of the word.
	if (textareaString.charAt(i) === ' ') {i--;}
	while (textareaString.charAt(i) !== ' ' && i > -1) {
		i--;
	}
	console.log('while broken. i = ' + i);
	console.log('character at i: ' + textareaString.charAt(i));

	// move forward in textString, add each character to selectedWord
	// until we get to the end of the word.
	i++;
	while (textareaString.charAt(i) !== ' ' && i < textareaString.length) {
		//add each character to selectedWord
		selectedWord += textareaString.charAt(i);
		i++;
	}
	console.log('selectedWord: ' + selectedWord);
	synObj.keyWord = selectedWord;
	return selectedWord;
}

// When index comes back:
function getNotesByCategorySuccess(json) {
	console.log('insertSuccess json: ' + JSON.stringify(json));
	notes = json;
	let textareaString = $('#textarea').val();
	// if this is the first click, insert notes[0].
	if (sampleObj.clickCount === 0) {
		$('#textarea').val(textareaString + notes[sampleObj.clickCount].content);
		textareaString = $('#textarea').val();

	} else {
		// after first click, replace the preceding sample.
		console.log('insertSuccess in else: ');
		console.log("1: " + textareaString);
		let currentSample = notes[sampleObj.clickCount];
		currentSample = "HO";
		console.log("2: " + currentSample);
		let currentSampleRegEx = new RegExp(textareaString,"g");
		console.log("3: " + currentSampleRegEx);
		textareaString = textareaString.replace(currentSampleRegEx, "What uup baby face.");
		console.log("2" + textareaString);
		$('#textarea').val(textareaString);
	}
	sampleObj.clickCount++;
}

function getNotesByCategoryError(e) {
	console.log('there was an error: e');
}

function synSuccess(json) {
	console.log('synSuccess.');
	// set the returned synonyms to synObj
	synObj.syns = json;
	// clear the old synonyms from the DOM
	$('.synList').remove();
	// clear the old synonyms from synListHTML
	let synListHTML = '';
	// set the top list item
	synListHTML = '<a id="synList" href="#" class="list-group-item active synList">' + synObj.keyWord + '</a>';
	// loop through synonyms and add to synListHTML,
	// we limit how many syns are added in the for loop
	for (let i = 0; i < 8 && i < synObj.syns.length ; i++) {
		synListHTML += '<a href="#" class="list-group-item synList synListItem">' + synObj.syns[i] + '</a>'
	}
	$('#synonymsDiv').append(synListHTML);

	//When the user clicks on a syn:
	$('.synListItem').click(function(event) {
		console.log('synListItem CLICKED');
		// grab the syn string value
		let syn = $(this).text();
		console.log('this.val' + syn);
		// grab the current textareaString
		let currentString = $('#textarea').val();
		console.log('textareaString: ' + currentString);
		// use regex to replace the keyWord with the selected syn
		// If there are multiple instances of a keyWord, all get replaced
		// even if the keyWord exists as part of another word (for example: is and this)
		// TODO: only replace selected keyWord
		let keyWordRegExp = new RegExp(synObj.keyWord, "g");
		currentString = currentString.replace(keyWordRegExp, syn);
		console.log('currentString: ' + currentString);
		// put new string in the textarea!
		$('#textarea').val(currentString);
		// hide the syns
		$('.synList').remove();
	});
}

function synError(e) {
	console.log('ERROR IN APP.JS !!' + JSON.stringify(e));
}

// This function determines the cursor's position in the textfield
(function ($, undefined) {
	$.fn.getCursorPosition = function() {
	    var el = $(this).get(0);
	    var pos = 0;
	    if('selectionStart' in el) {
	        pos = el.selectionStart;
	    } else if('selection' in document) {
	      el.focus();
	      var Sel = document.selection.createRange();
	      var SelLength = document.selection.createRange().text.length;
	      Sel.moveStart('character', -el.value.length);
	      pos = Sel.text.length - SelLength;
	    }
	    return pos;
	};
})(jQuery);