// handles updates to the UI
var quizUI = {
	displayNext: function() {
		if (quiz.hasEnded()) {
			this.displayScore();
		} else {
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
		}
	},
	displayQuestion: function() {
		this.populateIdWithHTML('question', quiz.getCurrentQuestion().question);
	},
	displayChoices: function() {
		var currentChoices = quiz.getCurrentQuestion().choices;

		for (var i=0; i<currentChoices.length; i++) {
			this.populateIdWithHTML('choice' + i, currentChoices[i]);
			this.guessHandler('guess' + i, currentChoices[i]);
		}
	},
	displayScore: function() {
		var gameOverString = '<h2>Game Over</h2> <h3>Your score is ' + quiz.score + '</h3>';
		this.populateIdWithHTML('quiz', gameOverString);
	},
	populateIdWithHTML: function(id, text) {
		var elem = document.getElementById(id);
		elem.innerHTML = text;
	},
	guessHandler: function(id, guess) {
		var button = document.getElementById(id);
		button.onclick = function() {
			quiz.checkAnswer(guess);
			quizUI.displayNext();
		}
	},
	displayProgress: function() {
		var currentQuestion = quiz.currentQuestionIndex + 1;
		this.populateIdWithHTML('progress', 'Question ' + currentQuestion + ' of ' + quiz.questions.length);
	}
};