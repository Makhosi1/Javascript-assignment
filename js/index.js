const questions = [
    {
        question: "Which country is not in Africa",
        possAnswers: ["Zimbabwe", "Ghana", "Honduras", "Zambia"],
        answer: "Honduras"
    },
    {
        question: "Which food is not a fruit",
        possAnswers: ['Banana', 'Apple', 'Orange', 'Spinach'],
        answer: "Spinach",
    },
    {
        question: "Who is Beyonce?",
        possAnswers: ['Prime Minister', 'Artist', 'IG Influencer', 'Pastor'],
        answer: "Artist",
    }
];

const quizContainer = document.querySelector(".quiz-container");
const quiz = document.querySelector("#quiz");
const submitbtn = document.querySelector("#submit");
const results = document.querySelector("#results");

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
                input.name = `quiz ${option}`;
                input.value = questions[quest].possAnswers[posAns];

                option.appendChild(input);
                quiz.appendChild(option);
            }
        }
    }

    function showresults() {
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
        if (selectedAnswer) {
            const answer = selectedAnswer.value;
            if (answer === questions[possAnswers].answer) {
            }
        }
    }


    showquestions();

    submitbtn.onclick = function () {
        showresults();
    }

};

buildQuiz();
