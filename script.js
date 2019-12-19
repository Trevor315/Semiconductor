var question = "What is FairChild Semiconductor?"
var answers = ['Small, Easily Portable Device', 'Electric Device that Switches/Amplifies Signals and Power', 'A Company that is A Branch of A Higher Industry', 'Something That is Put in A Computer'];
var answerButtons = document.getElementsByClassName("quizButton");
var correct = 3;

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