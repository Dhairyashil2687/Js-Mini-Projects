const quizData = [
    {
        question : 'What is National flower of India ?',
        options :[ 'Rose','Sunflower','Lotus','Chafa'],
        correctAns : 'Lotus',
    },
    {
        question : 'What is National fruit of India ?',
        options :[ 'Mango','Apple','WaterMelon','Orange'],
        correctAns : 'Mango',
    },
    {
        question : 'What is National Bird of India ?',
        options :[ 'Dolphin','Parrot','Crock','Peacock'],
        correctAns : 'Peacock',
    },
    {
        question : 'What is National animal of India ?',
        options :[ 'Donkey','Tiger','Lion','Monkey'],
        correctAns : 'Tiger',
    },
    {
        question : 'What is National Language of India ?',
        options :[ 'Marathi','Telagu','Urdu','Hindi'],
        correctAns : 'Hindi',
    },
];

let score = 0;

const question = document.querySelector('#question');
const optionsContainer = document.querySelector('.options');
const nextBtn = document.getElementById('next-btn');
const progress = document.querySelector('#progress');


let currentIndex = 0;
function loadQuestion(index){

    question.innerText = quizData[index].question;
    progress.innerText=`Question ${index+1} of ${quizData.length}`;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < quizData[index].options.length; i++) {
    const btn = document.createElement('button');
    btn.innerText = quizData[index].options[i];
    btn.classList.add('option');

    btn.addEventListener('click',function(){
        const correct = quizData[index].correctAns;

        if(btn.innerText===correct){

            btn.style.backgroundColor='green';
            btn.style.color = 'white';
            score++;
        }
        else{
            
            btn.style.backgroundColor='red';
            btn.style.color = 'white';

        }
    })

    optionsContainer.appendChild(btn);
}
}
loadQuestion(currentIndex);



nextBtn.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex<quizData.length){
        loadQuestion(currentIndex);
    }
    else{
        question.innerText = `Quiz Completed 🎉 Your score: ${score}/${quizData.length}`;
        optionsContainer.innerHTML = "";
        nextBtn.style.display = "none";
    }
})

