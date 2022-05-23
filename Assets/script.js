//variables
var StartBtn = document.querySelector('#StartQuiz');
const FirstPanel = document.querySelector('#OpeningMessage');

var secs =60

//lets make the start button commence things

StartBtn.addEventListener('click', () =>{
    
    if(FirstPanel.style.display === 'none') {
        FirstPanel.style.display = 'block';
    } else{
        FirstPanel.style.display='none';
     }
     
});


//lets make a timer
function timer() {
    var element =document.getElementById("timerText");
    element.innerHTML="time left"+" "+secs--;
    setTimeout(timer, 1000);
    if (secs<1){
        secs=60;
        element.innerHTML='<h2>Times up!</h2>';
    }
    
}
//     StartBtn.addEventListener('click',()=>{
    
//     c= c - 1;
//     if (c<60) {
//         timerText.innerHTML = c;
//     }
//     if(C<1){
//         Window.ClearInterval(update);
//     }
//     }
// )
//     c=60;
//     update=setInterval("Timer1()",1000);

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