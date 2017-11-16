function calculate() {
	var text = document.getElementById('all-text').value.trim();
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

	document.getElementById('avg-words').innerHTML = "There are an average of " + totalWords / totalSentences + " words per sentence.";
	document.getElementById('total-spaces').innerHTML = "There are " + totalSpaces + " spaces in this text.";
	document.getElementById('total-words').innerHTML = "There are " + totalWords + " words in this text.";
	document.getElementById('total-sentences').innerHTML = "There are " + totalSentences + " sentences in this text.";
}
