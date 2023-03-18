const quiz = [
    {
        questionNumber: 1,
        questionImage: "matrix1.png",
        optionImages: [
            "matrix1option1.PNG",
            "matrix1option2.PNG", 
            "matrix1option3.PNG", 
            "matrix1option4.PNG"
        ],
        answer: 3
    },
    {
        questionNumber: 2,
        questionImage: "matrix1.png",
        optionImages: [
            "matrix1option1.PNG",
            "matrix1option2.PNG", 
            "matrix1option3.PNG", 
            "matrix1option4.PNG"
        ],
        answer: 3
    }
]
let score = 0;

let currentQuestion = 1;
let totalQuestions = 2;

const startButton = document.getElementById('start-button');
startButton.addEventListener("click", startGame)

function startGame() {
    console.log('started');
    startButton.classList.add("hide");
}

function onSubmit() {

}