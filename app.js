var questions = [
	new Question("What is my name?", ["Nicolas", "Josh"], "Nicolas"),
	new Question("What is the capital of Mongolia", ["Kathmandu", "Ulan Bator"], "Ulan Bator")
];

// This question will come later !
var additionalQuestion = new Question("Who was the first president of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington")

//create Quiz
var quiz = new Quiz(questions);

//Pushing the 3rd question to the array
quiz.add(additionalQuestion);

//Initialize Quiz
quizUI.displayNext();