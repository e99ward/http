/* load data set */
let numbers = [];
var current = 1;

const URL = 'numbers.txt';
fetch(URL)
    .then(response => response.text())
    .then(text => {
        console.log(text);
        readtext = text.split('\n');
        readtext.forEach(lines => {
            let readjson = JSON.parse(lines);
            numbers.push(readjson);
        });
        // Show the latest Lotto number
        current = numbers.length - 1;
        ShowLottoNumber(numbers[current]);
    })
    .catch(err => console.log(err));

function ShowLottoNumber(db_numbers) {
    let text = '<span>';
    text += db_numbers.draw;
    text += '회 당첨결과 (추첨일: ';
    text += db_numbers.date;
    text += ')</span>';
    document.getElementById("num-draw").innerHTML = text;

    let text1 = '';
    db_numbers.n.forEach((value) => {
        text1 += '<span class="ball_645 ';
        if (value <= 10) {
            text1 += 'ball1">';
        } else if (value <= 20) {
            text1 += 'ball2">';
        } else if (value <= 30) {
            text1 += 'ball3">';
        } else if (value <= 40) {
            text1 += 'ball4">';
        } else {
            text1 += 'ball5">';
        }
        text1 += value;
        text1 += '</span>\n';
    });
    document.getElementById("num-win").innerHTML = text1;

    let value = db_numbers.bonus;
    let text2 = '<span class="ball_645 ';
    if (value <= 10) {
        text2 += 'ball1">';
    } else if (value <= 20) {
        text2 += 'ball2">';
    } else if (value <= 30) {
        text2 += 'ball3">';
    } else if (value <= 40) {
        text2 += 'ball4">';
    } else {
        text2 += 'ball5">';
    }
    text2 += value;
    text2 += '</span>\n';
    document.getElementById("num-bonus").innerHTML = text2;
}

function ShowPreviousNumbers() {
    if (current == 0) {
        alert('이전 자료가 없습니다.');
    } else {
        current -= 1;
        ShowLottoNumber(numbers[current]);
    }
}

function ShowNextNumbers() {
    if (current < numbers.length) {
        current += 1;
        ShowLottoNumber(numbers[current]);
    }    
}