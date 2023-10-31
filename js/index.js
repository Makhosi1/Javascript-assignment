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

let incorrectAnswer = [];
let question = 0;

function buildQuiz() {
   

    function showquestions() {
       
       
        for (let quest = 0; quest < questions.length; quest++) {
            const questionElement = document.createElement('div');
            questionElement.className = 'questionDiv';
            const quizQuestion = document.createElement('h2');
            quizQuestion.textContent = questions[quest].question;
            questionElement.appendChild(quizQuestion);
            quiz.appendChild(questionElement);
            
            const optionsElement = document.createElement('div');
            optionsElement.className = 'options';
    
      
            for (let posAns = 0; posAns < questions[quest].possAnswers.length; posAns++) {
                const option = document.createElement("label");
                option.textContent = questions[quest].possAnswers[posAns];
               

                const input = document.createElement("input");
                input.type = "radio";
                input.name = `quiz-${questions[quest].name}`;
                input.value = questions[quest].possAnswers[posAns];

                option.appendChild(input);
                optionsElement.appendChild(option)
                

            }
           
           quiz.appendChild(optionsElement);
        }
    }

    function showresults() {

let score = 0;
        incorrectAnswer = [];
        questions.forEach(question => {
            let answer = ""
            const selectedAnswer = document.querySelector(`input[name="quiz-${question.name}"]:checked`);
            console.log(selectedAnswer);
            console.log(question.answer);
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

        results.innerHTML = `You scored ${score} out of ${questions.length}!`;
       

    }


    showquestions();

    submitbtn.onclick = function displayResults (){
        showresults();
        
    }
   /* submitbtn.addEventListener('click', function(){
        document.h2.style.backgroundColor = 'green';

    submitbtn.reset();
        
    })*/

};

buildQuiz();



