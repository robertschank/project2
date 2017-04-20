console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	// insertnNoteButton click
	$('#insertNoteButton').click(function() {
		console.log('insertNoteButton CLICKED!');
		// ajax call to get notes (INDEX)
		$.ajax({
			method: 'GET',
			url: '/api/notes',
			success: insertSuccess,
			error: handleError
		});
	});
	// testButton click
	$('#testButton').click(function() {
		console.log('insertNoteButton CLICKED!');
		let pos =$('#textarea').getCursorPosition();
		console.log('pos: ' + pos);
		let textareaString = $('#textarea').val();
		console.log('initial click char at pos: ' + textareaString.charAt(pos));
		let selectedWord = findWordAtPos(pos, textareaString);
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
	return selectedWord;
}


// When index comes back:
function insertSuccess(json) {
	notes = json;
	let textareaString = $('#textarea').val();
	$('#textarea').val(textareaString + 'lasdfj' + notes[0].content);
}

function handleError(e) {
	console.log('there was an error: e');
}

function synSuccess(json) {
	console.log('synSuccess.');
	console.log('synSuccess json: ' + json);

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
    }
})(jQuery);