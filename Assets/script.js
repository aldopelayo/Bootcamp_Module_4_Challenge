//variables
const StartBtn = document.querySelector('#StartQuiz');
const FirstPanel = document.querySelector('#OpeningMessage');

var a=0;
a++;
var b=0;
b++;
var c=60;

//lets make the start button commence things
StartBtn.addEventListener('click', () =>{
    if(FirstPanel.style.display === 'none') {
        FirstPanel.style.display = 'block';
    } else{
        FirstPanel.style.display='none';
     }
});

//lets make a timer
function Timer1() {
    c= c - 1;
    if (c<60) {
        timerText.innerHTML = c;
    }
    if(C<1){
        Window.ClearInterval(update);
    }
}
    update=setInterval("Timer1()",1000);

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