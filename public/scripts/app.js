console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('#insertNoteButton').click(function() {
		console.log('insertNoteButton CLICKED!');
		$.ajax({
			method: 'GET',
			url: '/api/notes',
			success: insertSuccess,
			error: handleError
		});
	});

	$('#testButton').click(function() {
		console.log('insertNoteButton CLICKED!');
		let pos =$('#textarea').getCursorPosition();
		console.log('pos: ' + pos);
	});

});

function insertSuccess(json) {
	notes = json;
	let textareaString = $('#textarea').val();
	$('#textarea').val(textareaString + 'lasdfj' + notes[0].content);
}

function handleError(e) {
	console.log('there was an error: e');
}

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