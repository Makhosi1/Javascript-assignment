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
        name:"beyonceq"
    }
];

const quizContainer = document.querySelector(".quiz-container");
const quiz = document.querySelector("#quiz");
const submitbtn = document.querySelector("#submit");
const results = document.querySelector("#results");

let score = 0;
let incorrectAnswer =[];

function buildQuiz() {

    function showquestions() {
        for (let quest = 0; quest < questions.length; quest++) {

            const question = document.createElement('h2');
            console.log(questions[quest]);

            question.textContent = questions[quest].question;
            quiz.appendChild(question);


            for (let posAns = 0; posAns < questions[quest].possAnswers.length; posAns++) {
                const option = document.createElement("label");
                option.textContent = questions[quest].possAnswers[posAns];
                option.className = 'options';

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
                    score ++;
                    return;
                }    
            } 

            incorrectAnswer.push({
                question: question.question,
                incorrectAnswer : answer, 
                correctAnswer: question.answer,
            });
        });
        // remove console log stuff 
       console.log(incorrectAnswer);
    
    }


    showquestions();

    submitbtn.onclick = function () {
        showresults();
    }

};

buildQuiz();



