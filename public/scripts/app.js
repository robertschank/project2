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
});

function insertSuccess(json) {
	notes = json;
	let textareaString = $('#textarea').val();
	$('#textarea').val(textareaString + 'lasdfj' + notes[0].content);
}

function handleError(e) {
	console.log('there was an error: e');
}
