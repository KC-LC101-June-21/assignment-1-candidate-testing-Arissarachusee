const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question  =  "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer= "";
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ','(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? " ,'What is the minimum crew size for the ISS? '];
let correctAnswers = ["Sally Ride","true","40","Trajectory", "3"] 
let candidateAnswers = []
let answerQuestionOne = "Sally Ride";
let answerQuestionTwo = "sally ride";
let correctAnswerscount = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
//const input = require ("readline-sync");

candidateName = input.question("Candidate Name:");
}
function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

//candidateAnswer = input.question(question);
//console.log("Your Answer ", candidateAnswer); 
//correctAnswers = input.question ("correctAnswer : Sally Ride ")
for (let i = 0 ; i < questions.length ; i++) {
   let questionAnswer = input.question(`${i+1}) ${questions[i]}`);
   candidateAnswers.push(questionAnswer);
   console.log(`Your Answer: ${candidateAnswers[i]}`);
   console.log(`Correct Answer: ${correctAnswers[i]}\n`);
   
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

//console.log("Your Answer ", candidateAnswers); 

//correctAnswers = input.question ("correctAnswer : Sally Ride ")
//correctAnswers = input.question(correctAnswers)

//console.log(correctAnswers ,"YES CORRECT!")

//if (candidateAnswer.toUpperCase() == “ SALLY RIDE ”)

// if (candidateAnswer == answerQuestionOne || candidateAnswer == answerQuestionTwo ) {
//    console.log("Great!");

// correctAnswerscount = 1; 

// } else {
//    console.log("Try Again!.");
// }

  let grade; 
 
  
  for (let i = 0 ;i < candidateAnswers.length ; i++) {

  if (candidateAnswers[i].toUpperCase()===correctAnswers[i].toUpperCase()) {
       correctAnswerscount = correctAnswerscount + 1; 

  }
      
  }
 grade = (correctAnswerscount) / (questions.length) * 100


//console.log(grade);

  return grade; 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log(`Hello ${candidateName}\n`);


  askQuestion();
  gradeQuiz(this.candidateAnswers);

let grade  = (correctAnswerscount) / (questions.length) * 100 ;
console.log(`>>> Overall Grade: ${grade}% (${correctAnswerscount} of ${questions.length} responses correct) <<<`);

if (grade <= 40 ) {
   console.log(">>> Status: FAILED <<<");

} else {
   console.log(">>> Status: PASSED <<<");
}
}



//>>> Overall Grade: 40% (2 of 5 responses correct) <<<
//>>> Status: FAILED <<<




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