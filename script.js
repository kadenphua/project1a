window.onload = beginQuiz;

// Create an array to store all questions.
var allQns = [];
// Store each question in an object.
allQns[0] = {
  question: 'How many leap years will there be between 2000 and 2050?',
  choices: ['11', '15', '13', '12'],
  answer: 2
};
  allQns[1] = {
    question: 'What are the odds of rolling a dice and having it come up as a six three times in a row?',
      choices: ['1/216', '1/6', '1/36', '1/256'],
      answer: 0
};
  allQns[2] = {
    question: 'What are the odds of rolling two six-sided dice and getting two sixes?',
    choices: ['1/216', '1/18', '1/36', '1/6'],
    answer: 2
};
  allQns[3] = {
    question: 'What are the odds of rolling two 6-sided dice to the same number (getting doubles)?',
    choices: ['1/216', '1/36', '1/6', '1/3'],
    answer: 2
};
  allQns[4] = {
    question: 'If a library is 46% historical books and 24% fiction, with 105 others, how many books are fiction?',
    choices: ['36', '108', '240', '84'],
    answer: 3
};
  allQns[5] = {
    question: 'How many sales would a $7.00 book need to make $1,000?',
    choices: ['199', '143', '112', '245'],
    answer: 1
};
  allQns[6] = {
    question: 'What is the number if two-thirds of a number is 20 less than the original number?',
    choices: ['100', '50', '60', '70'],
    answer: 2
};
  allQns[7] = {
    question: '3 aces are drawn from a deck, what is the probability of drawing the fourth?',
    choices: ['2/50', '3/49', '1/49', '1/52'],
    answer: 2
};
  allQns[8] = {
      question: 'There are 8 people. Each person shakes hand with every other person. How many handshakes were there?',
      choices: ['28', '56', '32', '64'],
      answer: 0
};
  allQns[9] = {
    question: 'What is the value of x if x(-3) + 6 = -9 ?',
    choices: ['4', '6', '5', '-5'],
    answer: 2
};
  allQns[10] = {
    question: 'Which formula determines the center of a circle in the x, y coordinate system?',
    choices: ['X+Y', 'X^2 + Y^2', 'Sqrt(X) + Sqrt(Y)', 'X*Y'],
    answer: 1
};
  allQns[11] = {
    question: 'If a right triangle has a hypotenuse of 13 ft, which combination could be the lengths of the legs?',
    choices: ['8 Ft And 5 Ft', '5 Ft And 12 Ft', '6 Ft And 7 Ft', '8 Ft And 9 Ft'],
    answer: 1
};

function beginQuiz () {
  var question = document.getElementById("question");
  question.textContent = allQns[0].question;

  var choice0 = document.getElementById("choice0");
  choice0.textContent = allQns[0].choices[0];

  var choice0 = document.getElementById("choice1");
  choice0.textContent = allQns[0].choices[1];

  var choice0 = document.getElementById("choice2");
  choice0.textContent = allQns[0].choices[2];

  var choice0 = document.getElementById("choice3");
  choice0.textContent = allQns[0].choices[3];

}

// Create a variable to store the user's score
var userScore = 0;

// Create a variable to store the index of the current question
var qnNumber = 0;

// $("#restart").click(function(){
//
//   document.getElementById("question").textContent = allQns[0].question;
//
//   document.getElementById("choice0").textContent = allQns[0].choices[0];
//
//   document.getElementById("choice1").textContent = allQns[0].choices[1];
//
//   document.getElementById("choice2").textContent = allQns[0].choices[2];
//
//   document.getElementById("choice3").textContent = allQns[0].choices[3];
//
// });

// When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
$("#next").click(function() {

  // Check User's answers
  if($("form input[name=answer]:checked").val() == allQns[qnNumber].answer) {
    userScore++;
  }

  // If last question, show user's score rather than next question
    if (qnNumber == (allQns.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";

    document.getElementById("question").style.display = "none";

    alert("Your score is " + userScore + " out of 12.");

    }

  // Current question is not the last question, so increment the current question index
    qnNumber++;

  // Replace current question with next question
    question.textContent = allQns[qnNumber].question;
    choice0.textContent = allQns[qnNumber].choices[0];
    choice1.textContent = allQns[qnNumber].choices[1];
    choice2.textContent = allQns[qnNumber].choices[2];
    choice3.textContent = allQns[qnNumber].choices[3];

	});

  // function restart () {
  //   document.getElementById("question").textContent = allQns[0].question;
  //
  //   document.getElementById("choice0").textContent = allQns[0].choices[0];
  //
  //   document.getElementById("choice1").textContent = allQns[0].choices[1];
  //
  //   document.getElementById("choice2").textContent = allQns[0].choices[2];
  //
  //   document.getElementById("choice3").textContent = allQns[0].choices[3];
  // }
