const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// Adicionar a lista de perguntas
const questions = [
  {
    question: "Quem descobriu a America  foi Cristóvão Co...",
    answers: [
      { option: "Lombo", correct: true },
      { option: "Picanha", correct: false },
      { option: "Patinho", correct: false },
      { option: "Chá de dentro", correct: false }
    ]
  },
  {
    question: "Quem descobriu o Brasil foi Pedro alvares Ca...",
    answers: [
      { option: "Bral", correct: true },
      { option: "Breu", correct: false },
      { option: "Brio", correct: false },
      { option: "Brou", correct: false }
    ]
  },
  {
    question: "Pergunta: Por que o frango atravessou a rua?",
    answers: [
      { option: "Porque ele queria se juntar ao grupo de pássaros da praia", correct: false },
      { option: "Para pegar um voo para a Disneylândia.", correct: false },
      { option: "Para chegar ao bar do outro lado.", correct: true },
      { option: "Para escapar do cozinheiro e do seu destino de ser o prato principal.", correct: false }
    ]
  },
 
  
  // Adicionar mais perguntas aqui
];

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function nextQuestion(e) {
    if(e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }
    
    if(currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }

}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} perguntas de um total de ${questions.length}.`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}"> ${answer.option}</button>`;

            answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    })
}

loadQuestion();