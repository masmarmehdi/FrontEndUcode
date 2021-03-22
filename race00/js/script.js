
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
var length = document.querySelector(".lenth");
length.style.display = "none";
var weight = document.querySelector(".weight");
weight.style.display = "none";
var square = document.querySelector(".square");
square.style.display = "none";
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
        result.value = 'Math Error';
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
    result.value = Number(result) / 100;
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
        // if ( == 'Infinity') {
        //     result.value = 'Math error';
        // }
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




function lengthConv() {
    if (length.style.display === "none") {
        length.style.display = "block";
    } else {
        length.style.display = "none";
    }
  }
const lengthConverter = (id, value) => {
    let metr = document.querySelector("#inputMeters");
    let cm = document.querySelector("#inputcm");
    let km = document.querySelector("#inputKilometers");
    let miles = document.querySelector("#inputMiles");
    if(id == "inputMeters"){
        cm.value = value*100;
        km.value = value/1000;
        miles.value = value*1609.34;
    }
    else if(id == "inputcm"){
        metr.value = value/100;
        km.value = value/100000;
        miles.value = value/160934;
    }
    else if(id == "inputKilometers"){
        metr.value = value*1000;
        cm.value = value*100000;
        miles.value = value/1.60934;
    }
    else if(id == "inputMiles"){
        metr.value = value*1609.34;
        cm.value = value*160934;
        km.value = value*1.60934;
    }
}

function weightConv() {
    if (weight.style.display === "none") {
        weight.style.display = "block";
    } else {
        weight.style.display = "none";
    }
  }
const weightConverter = (id, value) => {
    let kilogram = document.querySelector("#inputKilogram");
    let pound = document.querySelector("#inputPound");
    let gram = document.querySelector("#inputGram");
    let tonne = document.querySelector("#inputTonne");

    if(id == "inputKilogram"){
        pound.value = value*2.20462;
        gram.value = value*1000; 
        tonne.value = value/1000;
    }
    else if(id == "inputPound"){
        kilogram.value = value/2.20462;
        gram.value = value*453.592; 
        tonne.value = value/2204.62;
    }
    else if(id == "inputGram"){
        kilogram.value = value/1000;
        pound.value = value/453.592;
        tonne.value = value/1e+6;
    }
    else if(id == "inputTonne"){
        kilogram.value = value*1000;
        pound.value = value*2204.62;
        gram.value = value*1e+6; 
    }
}
function squareConv() {
    var square = document.querySelector(".square");
    if (square.style.display === "none") {
        square.style.display = "block";
    } else {
        square.style.display = "none";
    }
}
const squareConverter = (id, value) => {
    let millimeter = document.querySelector("#inputMillimeter");
    let centimeter = document.querySelector("#inputCentimeter");
    let meter = document.querySelector("#inputMeter");
    let kilometer = document.querySelector("#inputKilometer");
    if (id == "inputMillimeter"){
        centimeter.value = value/100;
        meter.value = value/1000000;
        kilometer.value = value/1000000000000; 
    } else if (id == "inputCentimeter") {
        millimeter.value = value*100;
        meter.value = value*0.0001;
        kilometer.value = value/10000000000; 
    } else if (id == "inputMeter") {
        millimeter.value = value*1000000;
        centimeter.value = value*10000;
        kilometer.value = value*0.000001; 
    } else if (id == "inputKilometer") {
        millimeter.value = value*1000000000000;
        centimeter.value = value*10000000000;
        meter.value = value*1000000;
    }
}