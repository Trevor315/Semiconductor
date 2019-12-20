var question = "What is FairChild Semiconductor?"
var answers = ['Small, Easily Portable Device',
 'Electric Device that Switches/Amplifies Signals and Power',
 'A Company that is A Branch of A Higher Industry',
 'Something That is Put in A Computer'];
var answerButtons = document.getElementsByClassName("quizButton");
var Question = "Who Was the Founder of Fairchild Semiconductor?"
var Answers = ['Harrison Wells',
 'William Shockley',
  'Alex Harrison',
   'John Rockefeller'];
var Answerbuttons = document.getElementsByClassName("Quizbutton");
var correct = 2;
var Correct = 2;

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');    
        }
    });
}
document.getElementById('question').innerHTML = question;

function changeColor() {
    document.getElementById('question').setAttribute('style','background-color:rgb(210,50,35);')
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled',true);
    }
}





for(var Spot=0; Spot<Answers.length; Spot++)
{
    Answerbuttons[Spot].innerHTML = Answers[Spot];

    Answerbuttons[Spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == Answers[Correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');    
        }
    });
}
document.getElementById('Question').innerHTML = question;

function changeColor() {
    document.getElementById('Question').setAttribute('style','background-color:rgb(210,50,35);')
}

function disableAll() {
    for(var Num=0; Num<Answerbuttons.length; Num++) {
        Answerbuttons[Num].setAttribute('disabled',true);
    }
}