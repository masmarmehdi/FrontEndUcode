
let history = document.getElementsByClassName("history")[0];
let result = document.getElementsByClassName("result")[0];
// input function
function insert(number, output) {
    let result = document.getElementsByClassName(output)[0];
    console.log(number);
    console.log(result.value);
    if (result.value == "") {
        result.value = "";
    }
    result.value += number;

}
// decimal function
function decimal(output) {
    let result = document.getElementsByClassName(output)[0];
    let example = result.value.split(' ');
    console.log(example);
    if (result.value != "" && result.value.indexOf(".") == -1) {
        result.value += ".";
    }
}
// square root function
function sqrt() {
    let result = document.getElementsByClassName("result")[0];
    if (result.value >= 0) {
        result.value = Math.sqrt(result.value).toFixed(5);
        history.value = "";
    }
    else{
        result.value = 'Are you dumb?';
    }
}
// operators function
function operator(value) {
    let x = history.value.slice(-1);
    if(result.value == 0){
        result.value == "";
    }
    else if (x !== "+" || x !== "*" || x !== "÷" || x !== "-" || x !== "%" || x !== "^") {
        history.value += result.value;
        
        history.value = history.value + ' ' + value + ' ';
        result.value = "";
        
    }
}
// factorial function 
function factorial() {
    let result = document.getElementsByClassName("result")[0];
    let factorial = 1;
    for (let i = result.value; i > 0; i--) {
        factorial *= i;
    }
    result.value = factorial;
}

function percent() {
    result.value = Number(result.value) / 100;
    history.value = "";
}

function plusMinus() {
    history.value = "";
    result.value = (-1) * Number(result.value);
}

function clearResult(result, history) {
    document.getElementsByClassName(result)[0].value = "";
    document.getElementsByClassName(history)[0].value = "";
}

function resultVal() {
    if (history.value !== "") {
        if (result.value !== "")
            history.value += result.value;
        let example = history.value.split(' ');
        let x = example[example.length - 1] === "" ? example[example.length - 2] : example[example.length - 1];
        if (x == "+" || x == "*" || x == "-" || x == "%" || x == "÷" || x == "^" || x == "/") {
            example.splice(example.length - 2, 1);
        }
        if (example.indexOf('^') == -1) {
            result.value = String(eval(example.join('')));
        } else {
            result.value = eval(replace(example, "^", (prev, next) => {
                return Math.pow(prev, next);
            }).join(''));
        }
        history.value = "";
    }
}

function saveValue() {
    localStorage.setItem("KEY_VALUE", result.value)
}

function displaySavedValue(num) {
    result.value = Number(localStorage.getItem("KEY_VALUE")) + num
}

function displaySavedValueSumResult(num) {
    result.value = Number(localStorage.getItem("KEY_VALUE")) + result.value * num
}



function replace(listStr, char, fun) {
    while (true) {
        const i = listStr.indexOf(char)
        if (i === -1) break;
        listStr[i] = fun(listStr[i - 1], listStr[i + 1])
        listStr.splice(i + 1, 1)
        listStr.splice(i - 1, 1)
    }
    return listStr;
}
