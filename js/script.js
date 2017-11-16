function calculate() {
	var text = document.getElementById('all-text').value;
	var totalWords = 0;
	var totalSpaces = 0;
	var totalSentences = 0;

	for (let i = 0; i < text.length; i++) {
		var c = text.charAt(i);
		if (c === '?' || c === '.' || c === '!') {
			totalSentences++;
		} else if (c === ' ') {
			totalWords++;
			totalSpaces++;
		}
	}
	totalWords++;

	document.getElementById('avg-words').innerHTML = "Average words per sentence: " + totalWords / totalSentences;
	document.getElementById('total-spaces').innerHTML = "Total spaces: " + totalSpaces;
	document.getElementById('total-words').innerHTML = "Total words: " + totalWords;
	document.getElementById('total-sentences').innerHTML = "Total sentences: " + totalSentences;
}
