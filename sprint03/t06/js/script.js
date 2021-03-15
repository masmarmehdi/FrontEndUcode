var firstValue = 1;
while (true) { 
    var number = prompt(`Previous result: ${number}. Enter a new number:`);
    if (+number){
        firstValue += (+number);
    }
    else if(number.isNaN()){
        console.error('Invalid number!');
    }
    if (firstValue > 10000){
        firstValue = 1;
    }
}
