window.onload = function() {
	var container = document.getElementById('container');
	var flashcard = document.getElementById('flashcard');
	var scoreKeep = document.getElementById('score');
	var language = document.getElementById('language');
	var category = document.getElementById('category');
	var fontClick = document.getElementById('fontClick')
	var currentcard;
	var charArray;
	var counter;
	var score = 0;
	var time = 10000;
	var fonts = ['Handlee', 'Cabin Condensed', 'Source Sans Pro', 'Roboto Slab', 'Open Sans Condensed', 'Barlow Condensed', 'Rubik', 'Pacifico', 'Quicksand', 'Inconsolata', 'Cabin', 'VT323', 'Nunito', 'Nunito Sans','Roboto', 'Open Sans', 'Indie Flower', 'Bitter', 'Dosis', 'Oxygen', 'Amatic SC'];
	setInterval(timer, time);
	
	function timer(){
		createElements(generateCard())
	}
	
	fontClick.addEventListener('click', function(){
		var randomNumber = Math.floor(Math.random() * fonts.length);
		console.log(fonts[randomNumber])
		container.style.fontFamily = fonts[randomNumber];
	})

	function generateCard(){
		var randomNumber = Math.floor(Math.random() * terms.length);
		currentcard = terms[randomNumber];
		language.innerHTML = 'Language: ' + currentcard.language;
		category.innerHTML = 'Category: ' + currentcard.category;
		return currentcard;
		console.log('generateCard')
	}
	function createElements(card) {
		flashcard.innerHTML = "";
		counter = 0;
		charArray = card.description.split('');
		for(var i = 0; i < charArray.length; i++){
			var p = document.createElement('p');
			p.innerHTML = charArray[i];
			flashcard.appendChild(p);
		}
		console.log('createElement')

	}
	window.addEventListener('keydown', function(event){
		var currentChar = currentcard.description.charCodeAt(counter); //The thing on the flashcard
		var currentCharCode = String.fromCharCode(currentChar); //The charecter code....
		var currentInput = String.fromCharCode(event.keyCode); //Current key code?
		if (currentInput == currentCharCode.toUpperCase()) {
			var pElements = document.querySelectorAll('p');
			pElements[counter].className += 'typed';
			counter++;
		}
		if (counter == charArray.length) {
				createElements(generateCard());
				score++;
				scoreKeep.innerHTML = 'Score: ' + score;
				time = 10000;
			}
		console.log('that other function')

	})
	createElements(generateCard());
}