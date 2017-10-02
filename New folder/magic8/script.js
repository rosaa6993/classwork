var answers = [
'Yes definitely',
'Most likely',
'Yes',
'Ask again later',
'Do not count on it',
'Very doubtful',
'Nope',
'Nah Bro',
'Youre very needy',
    ];
document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
