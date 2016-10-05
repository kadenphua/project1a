$(document).ready(function() {
  var userScore = 0
  // var currentQuestion = 1
  var qnNumber = 0
  var qnsId = document.getElementById("qnsId")
  var question = document.getElementById("question")
  var choice0 = document.getElementById("choice0")
  var choice1 = document.getElementById("choice1")
  var choice2 = document.getElementById("choice2")
  var choice3 = document.getElementById("choice3")
  var form = document.getElementsByName("answer")
  var quiz = document.getElementById("quiz")
  var i = 0
    // Create an array to store all questions.
  var allQns = [
    // Store each question in an object.
    // allQns[0] =
    {
      question: 'How many leap years will there be between 2000 and 2050?',
      choices: ['11', '15', '13', '12'],
      answer: 2
    },
    // allQns[1] =
    {
      question: 'What are the odds of rolling a dice and having it come up as a six three times in a row?',
      choices: ['1/216', '1/6', '1/36', '1/256'],
      answer: 0
    },
    // allQns[2] =
    {
      question: 'What are the odds of rolling two six-sided dice and getting two sixes?',
      choices: ['1/216', '1/18', '1/36', '1/6'],
      answer: 2
    },
    // allQns[3] =
    {
      question: 'What are the odds of rolling two 6-sided dice to the same number (getting doubles)?',
      choices: ['1/216', '1/36', '1/6', '1/3'],
      answer: 2
    },
    // allQns[4] =
    {
      question: 'If a library is 46% historical books and 24% fiction, with 105 others, how many books are fiction?',
      choices: ['36', '108', '240', '84'],
      answer: 3
    },
    // allQns[5] =
    {
      question: 'How many sales would a $7.00 book need to make $1,000?',
      choices: ['199', '143', '112', '245'],
      answer: 1
    },
    // allQns[6] =
    {
      question: 'What is the number if two-thirds of a number is 20 less than the original number?',
      choices: ['100', '50', '60', '70'],
      answer: 2
    },
    // allQns[7] =
    {
      question: '3 aces are drawn from a deck, what is the probability of drawing the fourth?',
      choices: ['2/50', '3/49', '1/49', '1/52'],
      answer: 2
    },
    // allQns[8] =
    {
      question: 'There are 8 people. Each person shakes hand with every other person. How many handshakes were there?',
      choices: ['28', '56', '32', '64'],
      answer: 0
    },
    // allQns[9] =
    {
      question: 'What is the value of x if x(-3) + 6 = -9 ?',
      choices: ['4', '6', '5', '-5'],
      answer: 2
    },
    // allQns[10] =
    // {
    //   question: 'Which formula determines the center of a circle in the x, y coordinate system?',
    //   choices: ['X+Y', 'X^2 + Y^2', 'Sqrt(X) + Sqrt(Y)', 'X*Y'],
    //   answer: 1
    // },
    // // allQns[11] =
    // {
    //   question: 'If a right triangle has a hypotenuse of 13 ft, which combination could be the lengths of the legs?',
    //   choices: ['8 Ft And 5 Ft', '5 Ft And 12 Ft', '6 Ft And 7 Ft', '8 Ft And 9 Ft'],
    //   answer: 1
    // }
  ]

  $('#start').click(function() {
    $('#quiz').show()
    $('#welcome').hide()
    display()
    // qnNumber++
    // currentQuestion++
  })

  $('#next').click(function() {
    console.log("question: " + qnNumber);
      if (qnNumber < 9) {
        // if ($("form input[name=answer]:checked").val() == allQns[i].answer) {
        if ($("form input[name=answer]:checked").val() == 0) {

          console.log("correct");
          userScore++
          console.log(userScore);
        }
        qnNumber++
        // currentQuestion++
        allQns.splice(i, 1)
        deselectRadios()
        display()
        console.log("#next")
      }
      // console.log(allQns);
      // isGameOver()
      // Check User's answers
      else {
        // if ($("form input[name=answer]:checked").val() == allQns[i].answer) {
        if ($("form input[name=answer]:checked").val() == 0) {
          userScore++
        }
        qnsId.style.display = "none";
        question.style.display = "none";
        form[0].style.display = "none";
        next.style.display = "none";

        alert("Your score is " + userScore + " out of 10.");
        location.reload();
        // $('#quiz').hide()
        // $('#welcome').show()
        // deselectRadios()
      }
  })
// If last question, show user's score rather than next question
// function isGameOver() {
//   var form = document.getElementsByTagName("form");
//   var next = document.getElementById("next");
//
//   if (qnNumber == (10)) {
//     qnsId.style.display = "none";
//     question.style.display = "none";
//     form[0].style.display = "none";
//     next.style.display = "none";
//
//     alert("Your score is " + userScore + " out of 10.");
//
//   }
// }

// function restart() {
//   beginQuiz();
// }

function display() {
  if (qnNumber < 10) {
    i = Math.floor(Math.random() * allQns.length)
    // qnsId.textContent = "Question " + currentQuestion;
    qnsId.textContent = "Question " + (qnNumber+1);
    question.textContent = allQns[i].question;
    question.innerHTML = allQns[i].question

    for (var j = 0; j < 4; j++) {
      choice0.textContent = allQns[i].choices[0];
      choice1.textContent = allQns[i].choices[1];
      choice2.textContent = allQns[i].choices[2];
      choice3.textContent = allQns[i].choices[3];
    }
  }
  // else {
  //   //hide the quiz
  //   //restart button
  //   //tabulate score
  //     qnsId.style.display = "none";
  //     question.style.display = "none";
  //     form[0].style.display = "none";
  //     next.style.display = "none";
  //     alert("Your score is " + userScore + " out of 10.");
  //   }
}

function deselectRadios() {
  allRadios = document.getElementsByName('answer');
  for (var p = 0; p < allRadios.length; p++) {
    allRadios[p].checked = false;
  }
}
//
// restart.addEventListener("click", function() {
//   $('#quiz').hide()
//   $('#welcome').show()
//   deselectRadios()
//   userScore = 0
//   currentQuestion = 1
//   qnNumber = 0
//   i = 0
// })
})
