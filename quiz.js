// Keep track of the scores and currentQuestion
function Quiz(questions) {
  this.score = 0;
	this.questions = questions,
	this.currentQuestionIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
};

Quiz.prototype.checkAnswer = function(choice) {
  if (this.getCurrentQuestion().isCorrectAnswer(choice)) {
  	this.score++;
  }
  this.currentQuestionIndex++;
};