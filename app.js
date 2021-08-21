let boxs = document.getElementsByClassName('box');
let items = document.getElementsByClassName('hidden');
let scoreLable = document.getElementById('score');
let score = 0;
let resultNum = [];
let resultBox = [];

for (var i = 0; i < boxs.length; i++) {
    boxs[i].value = Math.floor(Math.random() * 10);
    resultBox.push(Number(boxs[i].value));
    var randomNum = Math.floor(Math.random() * 10);
    resultNum.push(randomNum);
}

function guessClick() {
    resultBox.splice(0)
    for (var i = 0; i < boxs.length; i++) {
        if (resultNum[i] > Number(boxs[i].value)) {
            boxs[i].style.backgroundColor = "#b40347";
        }
        if (resultNum[i] < Number(boxs[i].value)) {
            boxs[i].style.backgroundColor = "#026496";
        }
        if (resultNum[i] === Number(boxs[i].value)) {
            boxs[i].style.backgroundColor = "#009721";
        }
        resultBox.push(Number(boxs[i].value));
    }

    if (resultNum.toString() === resultBox.toString()) {
        for (let i = 0; i < items.length; i++) {
            document.getElementById('refresh').style.visibility = "visible";
            document.getElementsByClassName('hidden')[i].style.display = "none";
            document.getElementById('show').style.display = "block";
        }
    }

    score++;
    scoreLable.innerHTML = "Number Of Guesses: " + score;
}