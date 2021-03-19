function getHistory(){
    return document.getElementById("histroy").innerHTML;
}
function historyValue(number){
    return document.getElementById('history').innerHTML = number;
}

function getOutPut(){
    return document.getElementById('result').innerHTML;
}

function printOutput(){
    if(num == ""){
        document.getElementById("result").innerHTML = num;
    }
    else{
        document.getElementById("resut").innerHTML = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){

    })
}
let number  = document.getElementsByClassName("number");
for (let i  = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverseNumberFormat(getOutPut());
        if(output != NaN){
            output+= this.id;
            printOutput(output);
        }
    });
}