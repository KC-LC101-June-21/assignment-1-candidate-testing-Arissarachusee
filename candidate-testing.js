const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question  = " 1) Who was the first American woman in space ?" ;
let correctAnswer 
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
let answerQuestionOne = "Sally Ride";
let answerQuestionTwo = "sally ride";
let correctAnswerscount = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require ("readline-sync");

candidateName = input.question("Candidate Name:");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

candidateAnswer = input.question(question);

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log("Your Answer ", candidateAnswer); 

correctAnswers =input.question ("correctAnswer : Sally Ride ")

//console.log(correctAnswers ,"YES CORRECT!")

if (candidateAnswer == answerQuestionOne || candidateAnswer == answerQuestionTwo ) {
   console.log("Great!");

correctAnswerscount = 1; 

} else {
   console.log("Try Again!.");
}

  let grade; 
if (correctAnswerscount == 1) { 

grade = "100%"

console.log(grade);



} else  {

grade = "0%"

console.log(grade);

}


  return grade; 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log("Hello  " + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};