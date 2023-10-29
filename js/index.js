const questions = [
    {
        question: "Which country is not in Africa",
        possAnswers: ["Zimbabwe", "Ghana", "Honduras", "Zambia"],
        answer: "Honduras",
        name: "africaq"
    },
    {
        question: "Which food is not a fruit",
        possAnswers: ['Banana', 'Apple', 'Orange', 'Spinach'],
        answer: "Spinach",
        name: "foodq"

    },
    {
        question: "Who is Beyonce?",
        possAnswers: ['Prime Minister', 'Artist', 'IG Influencer', 'Pastor'],
        answer: "Artist",
        name: "beyonceq"
    }
];



const quizContainer = document.querySelector(".quiz-container");
const quiz = document.querySelector("#quiz");
const submitbtn = document.querySelector("#submit");
const results = document.querySelector("#results");

const header = document.querySelector("#header");
header.innerHTML= "Simple Quiz";

let score = 0;
let incorrectAnswer = [];
let question = 0;

function buildQuiz() {
   

    function showquestions() {
        /*const questionInfo = questions[question];
        const questionElement = document.createElement('div');
        questionElement.className = 'questionDiv';
        questionElement.innerHTML = questionInfo.question;
    
        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';*/

        for (let quest = 0; quest < questions.length; quest++) {

            const quizQuestion = document.createElement('h2');
            quizQuestion.textContent = questions[quest].question;
            console.log(quizQuestion);
           
            quiz.appendChild(quizQuestion);
           
           



            for (let posAns = 0; posAns < questions[quest].possAnswers.length; posAns++) {
                const option = document.createElement("label");
                option.textContent = questions[quest].possAnswers[posAns];
                option.className = 'quizOptions';

                const input = document.createElement("input");
                input.type = "radio";
                input.name = `quiz-${questions[quest].name}`;
                input.value = questions[quest].possAnswers[posAns];

                option.appendChild(input);
                quiz.appendChild(option);

            }
           
        }
    }

    function showresults() {
        incorrectAnswer = [];
        questions.forEach(question => {
            let answer = ""
            const selectedAnswer = document.querySelector(`input[name="quiz-${question.name}"]:checked`);
            if (selectedAnswer) {
                answer = selectedAnswer.value;
                if (answer === question.answer) {
                    score++;
                    return;
                }
            }

            incorrectAnswer.push({
                question: question.question,
                incorrectAnswer: answer,
                correctAnswer: question.answer,
            });
        });
        // remove console log stuff 
        console.log(incorrectAnswer);

    }


    showquestions();

    submitbtn.onclick = function displayResults (){
        showresults();
        results.innerHTML = `You scored ${score} out of ${questions.length}!`;
    }
    submitbtn.addEventListener('click', function(){
        document.h2.style.backgroundColor = 'green';
    })

};

buildQuiz();



