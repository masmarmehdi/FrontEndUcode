var beginRange = prompt("Enter the begining of the range: ");
var endRange = prompt("Enter the end of the range: ")
function checkDivision(beginRange, endRange){
    for(var i = beginRange ; i <= endRange; i++){
        if(i % 2 == 0){
            console.log(`${i} is even`);
        }
        else if(i % 3 == 0){
            console.log(`${i} is a multiple of 3`);
        }
        else if(i % 10 == 0){
            console.log(`${i} is a multiple of 10`);
        }
    }
}