const quizData = [
  { question: "What is the currency of Japan?", options: ["Won", "Euro", "Dollar", "Yen"], correct: 3 },
  { question: "Who was the 10th President of the USA?", options: ["James Madison", "John Tyler", "Millard Fillmore", "James Monroe"], correct: 1 },
  { question: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], correct: 0 },
  { question: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Isaac Newton"], correct: 2 },
  { question: "What is the currency of Brazil?", options: ["Dollar", "Yen", "Peso", "Real"], correct: 3 },
  { question: "What is the capital of Kenya?", options: ["Mombasa", "Eldoret", "Nairobi", "Kisumu"], correct: 2 },
  { question: "Which US state is known as the 'Sunshine State'?", options: ["Texas", "California", "Florida", "Hawaii"], correct: 2 },
  { question: "What is the capital of Egypt?", options: ["Luxor", "Giza", "Cairo", "Alexandria"], correct: 2 },
  { question: "What year did the USA gain independence?", options: ["1776", "1775", "1774", "1783"], correct: 0 },
  { question: "What is the currency of Australia?", options: ["Euro", "Australian Dollar", "Pound", "Yen"], correct: 1 },
  { question: "How many stars are on the US flag?", options: ["50", "51", "49", "52"], correct: 0 },
  { question: "What is the capital of Mexico?", options: ["Tijuana", "Mexico City", "Cancún", "Guadalajara"], correct: 1 },
  { question: "Who was the first human to travel into space?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], correct: 1 },
  { question: "What is the currency of Canada?", options: ["Peso", "Canadian Dollar", "Euro", "Rupee"], correct: 1 },
  { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], correct: 0 },
  { question: "What year did World War II end?", options: ["1942", "1944", "1945", "1946"], correct: 2 },
  { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correct: 0 },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], correct: 1 },
  { question: "Which empire built the Colosseum in Rome?", options: ["Byzantine Empire", "Ottoman Empire", "Roman Empire", "Greek Empire"], correct: 2 },
  { question: "What is the capital of the USA?", options: ["Washington, D.C.", "Philadelphia", "New York", "Boston"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    document.getElementById("question").textContent = currentQuiz.question;

    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = ""; // Clear previous options
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(index));
        optionsEl.appendChild(button);
    });
}

function selectOption(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
        correctSound.play(); // Play correct answer sound
    } else {
        wrongSound.play(); // Play wrong answer sound
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = `Your score: ${score} / ${quizData.length}`;
}

document.getElementById("restart-btn").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
});

// Load the first question
loadQuestion();