$(document).ready(function () {
  var qnNumber = 0
  var qnsId = document.getElementById('qnsId')
  var question = document.getElementById('question')
  var choice0 = document.getElementById('choice0')
  var choice1 = document.getElementById('choice1')
  var choice2 = document.getElementById('choice2')
  var choice3 = document.getElementById('choice3')
  var form = document.getElementsByName('answer')
  var quiz = document.getElementById('quiz')
  var i = 0
  var score1 = 0
  var score2 = 0
  var player = 0

  // Create an array to store all questions.
  var allQns = [
    {
      question: '1+1 = ?',
      choices: ['11', '2', '4', '0.1'],
      answer: 1
    },
    {
      question: '10^2 = ?',
      choices: ['10', '1000', '1', '100'],
      answer: 3
    },
    {
      question: '6 x 3 = ?',
      choices: ['2', '12', '18', '24'],
      answer: 2
    },
    {
      question: '-5 x 5 =',
      choices: ['25', '20', '-25', '-20'],
      answer: 2
    },
    {
      question: '12 x 12 =',
      choices: ['12', '108', '240', '144'],
      answer: 3
    },
    {
      question: 'How many sales would a $7.00 book need to make $1,000?',
      choices: ['199', '143', '112', '245'],
      answer: 1
    },
    {
      question: 'What is the number if two-thirds of a number is 20 less than the original number?',
      choices: ['100', '50', '60', '70'],
      answer: 2
    },
    {
      question: '3 aces are drawn from a deck, what is the probability of drawing the fourth?',
      choices: ['2/50', '3/49', '1/49', '1/52'],
      answer: 2
    },
    {
      question: '11^0',
      choices: ['1', '11', '121', '12'],
      answer: 0
    },
    {
      question: 'What is the value of x if x(-3) + 6 = -9 ?',
      choices: ['4', '6', '5', '-5'],
      answer: 2
    },
  ]

  $('#start').click(function () {
    $('#quiz').show()
    $('#welcome').hide()
    display()
    showPlayer()
  })

  $('#next').click(function () {
    if (qnNumber < 9) {
      // if ($("form input[name=answer]:checked").val() == allQns[i].answer) {
      // Use parseInt to convert string into integer when using ===
      if (parseInt($('form input[name=answer]:checked').val()) === allQns[i].answer) {
        console.log("check");
        if (qnNumber % 2 === 0) {
          score1++
        } else {
          score2++
        }
    }
      qnNumber++
      allQns.splice(i, 1)
      deselectRadios()
      display()
      showPlayer()
    }
    else {
      if(parseInt($('form input[name=answer]:checked').val()) === allQns[i].answer) {
        if (qnNumber % 2 === 0) {
          score1++
        } else {
          score2++
        }
    }
      qnsId.style.display = 'none'
      question.style.display = 'none'
      form[0].style.display = 'none'
      next.style.display = 'none'

      alert('Player 1 score is ' + score1 + ' out of 5.' + 'and ' + 'Player 2 score is ' + score2 + ' out of 5.')
      if (score1 > score2) {
        alert('Player 1 is the winner.')
      } else if (score1 < score2) {
        alert('Player 2 is the winner.')
      } else {
        alert('It is a tie.')
      }
      location.reload()
    }
  })

  function display () {
    if (qnNumber < 10) {
      i = Math.floor(Math.random() * allQns.length)
      question.textContent = allQns[i].question
      question.innerHTML = allQns[i].question

      for (var j = 0; j < 4; j++) {
        choice0.textContent = allQns[i].choices[0]
        choice1.textContent = allQns[i].choices[1]
        choice2.textContent = allQns[i].choices[2]
        choice3.textContent = allQns[i].choices[3]
      }
    }
  }

  function deselectRadios () {
    allRadios = document.getElementsByName('answer')
    for (var p = 0; p < allRadios.length; p++) {
      allRadios[p].checked = false
    }
  }

  function showPlayer(){
    if (qnNumber % 2 === 0) {
      (player = 'Player 1 Turn')
    } else {
      (player = 'Player 2 Turn')
    }
    qnsId.textContent = player
  }
})
