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
        $("#question1").click(function(){
            $("#question1").hide();
            $("#question2").show();
});
$("#question2").click(function(){
    $("#question2").hide();
    $("#question3").show();
});
$("#question3").click(function(){
    $("#question3").hide();
    $("#question4").show();
});
$("#question4").click(function(){
    $("#question4").hide();
    $("#question5").show();
});
$("#question5").click(function(){
    $("#question5").hide();
    $("#question6").show();
});
$("#question6").click(function(){
    $("#question6").hide();
});
//next we can show the submit score card !


//logic to our right answers and wrong answers
function AnswerTracker(){

}

//lets see our final score

function submitscore (){

}

//lets compare our score to others

function scoreboard (){

}