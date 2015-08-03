// keep collection of the questions
var Question = function(question, choices, solution) {
  this.question = question,
  this.choices = choices,
  this.solution = solution;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.solution === choice;
}