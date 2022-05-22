//variables
const StartBtn = document.querySelector('#StartQuiz');
const FirstPanel = document.querySelector('#OpeningMessage');


//lets make the start button commence things
StartBtn.addEventListener('click', () =>{
    if(FirstPanel.style.display === 'none') {
        FirstPanel.style.display = 'block';
    } else{
        FirstPanel.style.display='none';
     }
});


//lets go to our new question
function NextQuestion(){

}
//logic to our right answers and wrong answers
function AnswerTracker(){

}

//lets see our final score

function submitscore (){

}

//lets compare our score to others

function scoreboard (){

}