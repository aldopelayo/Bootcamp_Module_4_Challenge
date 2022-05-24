//variables
var StartBtn = document.querySelector('#StartQuiz');
const FirstPanel = document.querySelector('#OpeningMessage');
const  UserInitial = document.getElementById('#Username');
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





//logic to our right answers and wrong answers


// lets go to our new question
        $("#mc1").click(function(){
            $("#mc1").hide();
            $("#mc2").show();
});
$("#mc2").click(function(){
    $("#mc2").hide();
    $("#mc3").show();
});
$("#mc3").click(function(){
    $("#mc3").hide();
    $("#mc4").show();
});
$("#mc4").click(function(){
    $("#mc4").hide();
    $("#mc5").show();
});
$("#mc5").click(function(){
    $("#mc5").hide();
    $("#mc6").show();
});
$("#mc6").click(function(){
    $("#mc6").hide();
});

//lets see our final score

function scanAnswers()
{
    var right =0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;

    

    if (q1=="Alerts")(right++)
    if (q2=="parenthesis"){right++}
    if (q3=="numbers and strings"){right++}
    if (q4=="quotes"){right++}
    if (q5=="console.log"){right++}
    if (q6=="Alerts"){right++}
    let FinalScore=parseInt(right)
    document.getElementById('FinalScore').innerHTML=FinalScore



}
// next we can show the submit score card !
function ScoreCard(){

}
//lets compare our score to others

// function scoreboard ()