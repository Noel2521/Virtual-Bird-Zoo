document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "1.What is the only bird known to fly backwards?",
            choices: ["Hummingbird", "Eagle", "Owl", "Sparrow"],
            correctAnswer: "Hummingbird"
        },
        {
            question: "2.Which bird is known for its impressive mimicry skills?",
            choices: ["Parrot", "Lyrebird", "Crow", "Robin"],
            correctAnswer: "Lyrebird"
        },
        {
            question: "3.What is the primary diet of the hummingbird?",
            choices: ["Insects", "Nectar", "Seeds", "Fruit"],
            correctAnswer: "Nectar"
        },
        {
            question: "4.hich bird is known for its ability to mimic human speech?",
            choices:["Raven", "Parrot", "Owl", "Eagle"],
            correctAnswer:"Parrot"
        },
        {
            question: "5.What unique feature is found in the peacock's feathers?",
            choices:["Stripes", "Spots", "Eyespots", "Solid colors"],
            correctAnswer:"Eyespots"
        },
        {
            question: "6.Which bird is famous for its elaborate courtship dance?",
            choices:["Peacock", "Albatross", "Sparrow", "Pigeon"],
            correctAnswer:"Albatross"
        },
        {
            question: "7.What adaptation allows owls to fly silently?",
            choices: ["Feather color", "Beak shape", "Eye size", "Wing structure"],
            correctAnswer: "Wing structure"
        },
        {
            question: "8.Which bird can hover in place like a helicopter?",
            choices: ["Eagle", "Sparrow","Humming bird", "Kingfisher"],
            correctAnswer: "Humming bird"
        },
        {
            question: "9.What is the largest bird of prey?",
            choices: ["Bald Eagle", "Golden Eagle", "Andean Condor", "Harpy Eagle"],
            correctAnswer: "Andean Condor"
        },
        {
            question: "10.Which bird builds the largest nest?",
            choices: ["Bald Eagle", "Osprey", "Weaver bird", "Sociable Weaver"],
            correctAnswer: "Sociable Weaver"
        },
        {
            question: "11.What is the fastest bird in the World?",
            choices: ["Peregrine Falcon", "Golden Eagle", "Swift", "Sparrow"],
            correctAnswer: "Peregrine Falcon"
        },
        {
            question: "12.Which bird is known to migrate the longest distance?",
            choices: ["Albatross","Arctic Tern", "Canada Goose", "Swallow"],
            correctAnswer: "Arctic Tern"
        },
        {
            question: "13.What unique feature do penguins use to keep warm?",
            choices: ["Fat layer", "Huddling","Waterproof feathers", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "14.What mechanism do pigeons use to find their way home?",
            choices: ["Sun position", "Earth's magnetic field", "Star pattern", "Visual landmarks"],
            correctAnswer: "Earth's magnetic field"
        },
        {
            question: "15.Which bird is known for stealing shiny objects?",
            choices: ["Raven", "Magpie", "Crow", "Eagle"],
            correctAnswer: "Magpie"
        },
        {
            question:"16.What bird has the longest wingspan?",
            choices: ["Andean Condor", "Albatross", "Bald Eagle", "Golden Eagle"],
            correctAnswer: "Albatross"
        },
        {
            question: "17.Which bird is known for its brillant pink coloration?",
            choices: ["Flamingo", "Parrot", "Canary", "Peacock"],
            correctAnswer: "Flamingo"
        },
        {
            question: "18.Which bird is know as the 'King of the Skies' due to its hunting prowess?",
            choices: ["Peregrine Falcon", "Bald Eagle", "Golden Eagle", "Osprey"],
            correctAnswer: "Golden Eagle"
        },
        {
            question: "19.Which bird is considered the world's most endangered and rarest?",
            choices: ["Kakapo","Spix's Macaw","Siberian Crane","Philippine Eagle"],
            correctAnswer: "Kakapo"
        },
        {
            question: "20.What bird is known for its drumming on tree trunks?",
            choices: ["Pigeon", "Sparrow","Woodpecker", "Mockingbird"],
            correctAnswer: "Woodpecker"
        },
    ];

    const quizContainer = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('feedback');
    const submitButton = document.getElementById('submit');

    function buildQuiz() {
        const output = [];
        const quizContainer = document.getElementById('quiz-form');
        const questionsContainer = document.createElement('div'); // Create a new div for questions
    
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let choice of currentQuestion.choices) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${choice}">
                        ${choice}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
    
        questionsContainer.innerHTML = output.join('');
        quizContainer.insertBefore(questionsContainer, quizContainer.firstChild); // Insert before the submit button
    }
    

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
    
        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'Black';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
    
        if (numCorrect === questions.length) {
            resultsContainer.innerHTML = `Congratulations! You scored full marks!`;
            document.getElementById('congratulationsFlower').style.display = 'block'; // Show the flower
        } else {
            resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} questions right.`;
            document.getElementById('congratulationsFlower').style.display = 'none'; // Hide the flower if not full marks
        }
    }
    

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});

       
