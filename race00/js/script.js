function getHistory(){
    return document.getElementById("history").innerText;
}

function historyValue(num){
    return document.getElementById("history").innerHTML = num;
}

function getOutPut(){
    return document.getElementById("result").innerHTML;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("result").innerHTML = num;
    }
    else{
        document.getElementById("result").innerHTML = num;
    }
}

let operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == 'C'){
            historyValue("");
            printOutput("");
        }
        else if(this.id == 'backspace'){
            let output = getOutPut().toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            let output = getOutPut();
            let history = getHistory();
            if(output =="" && history != ""){
                if(isNaN(history[history.length -1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output != "" || history != ""){
                history = history + output;
                if(this.id == "equal"){
                    let result = eval(history);
                    printOutput(result);
                    historyValue("");
                }
                else{
                    history = history + this.id;
                    historyValue(history);
                    printOutput("");
                }
            }
        }
    })
}
var number  = document.getElementsByClassName("number");
for (let i  = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = getOutPut();
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}