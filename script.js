$(document).ready(function() {

  var startBtn = document.getElementById('startBtn');

  startBtn.addEventListener('click', function(){
    instructions.style.display='none';
    
  })


  window.onload = beginQuiz;

  function beginQuiz() {
     quiz.style.display = "none";
  }

var questions = [
  {
    question: 'How many leap years will there be between 2000 and 2050?',
    choices: ['11', '15', '13', '12'],
    correct: 2
  },
  {
    question: 'What are the odds of rolling a dice and having it come up as a six three times in a row?',
    choices: ['1/216', '1/6', '1/36', '1/256'],
    correct: 0
  },
  {
    question: 'What are the odds of rolling two six-sided dice and getting two sixes?',
    choices: ['1/216', '1/18', '1/36', '1/6'],
    correct: 2
  },
  {
    question: 'What are the odds of rolling two 6-sided dice to the same number (getting doubles)?',
    choices: ['1/216', '1/36', '1/6', '1/3'],
    correct: 2
  },
  {
    question: 'If a library is 46% historical books and 24% fiction, with 105 others, how many books are fiction?',
    choices: ['36', '108', '240', '84'],
    correct: 3
  },
  {
    question: 'How many sales would a $7.00 book need to make $1,000?',
    choices: ['199', '143', '112', '245'],
    correct: 1
  },
  {
    question: 'What is the number if two-thirds of a number is 20 less than the original number?',
    choices: ['100', '50', '60', '70'],
    correct: 2
  },
  {
    question: '3 aces are drawn from a deck, what is the probability of drawing the fourth?',
    choices: ['2/50', '3/49', '1/49', '1/52'],
    correct: 2
  },
  {
    question: 'There are 8 people. Each person shakes hand with every other person. How many handshakes were there?',
    choices: ['28', '56', '32', '64'],
    correct: 0
  },
  {
    question: 'What is the value of x if x(-3) + 6 = -9 ?',
    choices: ['4', '6', '5', '-5'],
    correct: 2
  },
  {
    question: 'Which formula determines the center of a circle in the x, y coordinate system?',
    choices: ['X+Y', 'X^2 + Y^2', 'Sqrt(X) + Sqrt(Y)', 'X*Y'],
    correct: 1
  },
  {
    question: 'If a right triangle has a hypotenuse of 13 ft, which combination could be the lengths of the legs?',
    choices: ['8 Ft And 5 Ft', '5 Ft And 12 Ft', '6 Ft And 7 Ft', '8 Ft And 9 Ft'],
    correct: 1
  }
]
