console.log("hello")
const quizDB = [
    {
        question: "Q.1 The two ways to arrange multiple windows on the desktop are -",
        a: "cascade and tile",
        b: "drag and drop",
        c: "point and click",
        d: "minimize and maximize",
        ans: "ans1"
    },
    {
        question: "Q.2 Which of the following is a programming language for creating special programs like applets?",
        a: "Java",
        b: "cable",
        c: "domain name",
        d: "Net",
        ans: "ans1"
    },
    {
        question: "Q.3 Which of the following is true about Assembly Language?",
        a: " It is an object oriented programming language",
        b: " It is a high-level programming language",
        c: " It is a low-level programming language",
        d: "It is a language for assembling computers",
        ans: "ans3"
    }

];

let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');
let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

function loadQuestion() {
    console.log(quizDB[0].question);
    let questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

};

loadQuestion();


function getCheckedAnswer() {
    let answer;
    answers.forEach((curtAnsElem) => {
        if (curtAnsElem.checked) {
            answer = curtAnsElem.id;
        }

    })
    return answer;
}

submit.addEventListener('click', () => {
    let checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer)

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>Your Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
     
        `
        showScore.classList.remove('scoreArea')
    }

   

    })

    function deselectAll() {
        answers.forEach((curtAnsElem) => curtAnsElem.checked = false);
     
    }