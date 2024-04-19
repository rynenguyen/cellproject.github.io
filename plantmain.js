const container = document.getElementById("plantcontainer");
const questions = [
    {
        question: "Which organelle is responsible for holding the components of the cell and protecting them from damage?",
        answer: 'cytoplasmcard'
    },
    {
        question: "Which organelle separates the cytoplasm of the cell from its cell wall?",
        answer: 'cellmembranecard'
    },
    {
        question: "Which organelle is responsible for protein synthesis?",
        answer: 'ribosomescard'
    },
    {
        question: "Which organelle is responsible for storage and transport, intracellular environmental stability, and response to injury?",
        answer: 'vacuolecard'
    },
    {
        question: "Which organelle prepares proteins and lipid (fat) molecules for use in other places inside and outside the cell?",
        answer: 'golgicard'
    },
    {
        question: "Which organelle produces and assembles the cell's ribosomes?",
        answer: 'nucleoluscard'
    },
    {
        question: "Which organelle produces energy through photosynthesis and oxygen-release processes? It is only found in plant cells.",
        answer: 'chloroplastscard'
    },
    {
        question: "Which organelle produces the energy necessary for the cell's survival and functioning?",
        answer: 'mitochondriacard'
    },
    {
        question: "Which organelle acts as a skeleton for plants, protects the internal contents of the cell, and regulates cell growth?",
        answer: 'cellwallcard'
    },
    {
        question: "Which organelle is responsible for the production of protein and lipid molecules?",
        answer: 'endocard'
    },
    {
        question: "Which organelle is responsible for organizing, protecting, storing, and copying DNA? It also stores the nucleolus.",
        answer: 'nucleuscard'
    },
    {
        question: "Which organelle provides support, motility, and regulation?",
        answer: 'cytoskeletoncard'
    },
]

const questionElement = document.getElementById('questionhere');
let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}

function nextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        questionElement.innerHTML = "You've completed the plant cell puzzle!"
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var parent = document.getElementById(data).parentNode;
    var child = parent.getElementsByTagName("h1")[0];

    if (container.contains(ev.target)){
        let currentQuestion = questions[currentQuestionIndex];
        if (document.getElementById(data).parentNode.id == currentQuestion.answer){
            addToPuzzle(document.getElementById(data).parentNode);
            var removed = parent.removeChild(child);
            nextQuestion();
        }
    }
}

function addToPuzzle(organelle){
    container.append(organelle);
    organelle.style.gridArea = "frame";
    organelle.style.alignSelf = "center";
    organelle.style.justifySelf = "center";
    organelle.style.pointerevents = "none";
}

startQuiz();