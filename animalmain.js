const container = document.getElementById("animalcontainer");
const questions = [
    {
        question: "Which organelle is responsible for holding the components of the cell and protecting them from damage?",
        answer: 'cytoplasmcard'
    },
    {
        question: "Which organelle prepares proteins and lipid (fat) molecules for use in other places inside and outside the cell?",
        answer: 'golgicard'
    },
    {
        question: "Which organelle is responsible for protein synthesis?",
        answer: 'ribosomescard'
    },
    {
        question: "Which organelle breaks down lipids, carbohydrates, and proteins into small molecules that can be used by the rest of the cell? It is only found in animal cells.",
        answer: 'lysosomescard'
    },
    {
        question: "Which organelle produces and assembles the cell's ribosomes?",
        answer: 'nucleoluscard'
    },
    {
        question: "Which organelle helps in the storage and disposal of various substances?",
        answer: 'vacuolecard'
    },
    {
        question: "Which organelle separates the interior of the cell from the outside environment?",
        answer: 'cellmembranecard'
    },
    {
        question: "Which organelle is responsible for organizing, protecting, storing, and copying DNA? It also stores the nucleolus.",
        answer: 'nucleuscard'
    },
    {
        question: "Which organelle makes cellular products like hormones and lipids?",
        answer: 'smooth_endocard'
    },
    {
        question: "Which organelle provides support, motility, and regulation?",
        answer: 'cytoskeletoncard'
    },
    {
        question: "Which organelle produces the energy necessary for the cell's survival and functioning?",
        answer: 'mitochondriacard'
    },
    {
        question: "Which organelle produces proteins for the rest of the cell to function?",
        answer: 'rough_endocard'
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
        questionElement.innerHTML = "You've completed the animal cell puzzle!"
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