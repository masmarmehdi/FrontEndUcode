var beginRange = prompt("Enter the begining of the range: ");
var endRange = prompt("Enter the end of the range: ");
function checkDivision(beginRange, endRange){
    for(var i = beginRange ; i <= endRange; i++){
        if(i % 2 == 0 && i % 3 == 0 && i % 10 == 0){
            console.log(`${i} is even, a multiple of 3 , a multiple of 10`);
        }
        else if(i % 2 == 0 && i % 3 == 0){
            console.log(`${i} is even and a multiple of 3`);
        }
        else if(i % 3 == 0 && i % 10 == 0){
            console.log(`${i} is a multiple of 3 and a multiple of 10`);
        }
        else if(i % 2 == 0 && i % 10 == 0){
            console.log(`${i} is even and a multiple of 10`)
        }
        else if(i % 2 == 0){
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
checkDivision(beginRange, endRange);