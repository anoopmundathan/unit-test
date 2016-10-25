module.exports.titleCase = function (title) {
	var words = title.split(' ');
	var titleWords = words.map(function(word) {
		return word[0].toUpperCase() + word.substring(1);
	});

	return titleWords.join(' ');
}

// module.exports.titleCase = titleCase;
