
/*function checkDivision(beginRange=1, endRange=100){
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
            console.log(`${i} is even and a multiple of 10`);
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
        else{
            console.log(`${i} -`);
        }
    }
}
var beginRange = prompt("Enter the begining of the range: ");
var endRange = prompt("Enter the end of the range: ");

if(beginRange === "" || endRange === ""){
    if(beginRange == "" && endRange != ""){
        checkDivision(1,endRange);
    }
    else if(beginRange !== "" && endRange === ""){
        checkDivision(beginRange, 100);
    }
    else if(beginRange === "" && endRange === ""){
        checkDivision();
    }
}
else if(beginRange !== "" && endRange !== ""){
    checkDivision(beginRange,endRange);
}*/
function checkDivision(beginRange=1, endRange=100) {
    if (
      beginRange === "" ||
      endRange === "" ||
      beginRange === null ||
      endRange === null ||
      beginRange >= endRange
    ) {
      alert("The default range is from 1 to 100");
    }
    for (let i = beginRange; i <= endRange; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
        console.log(`${[i]} is even, is multiple of 3 and is a multiple of 10`)
      } else if (i % 2 == 1 && i % 3 === 0 && i % 10 === 0) {
        console.log(`${[i]} is odd, is multiple of 3 and is a multiple of 10`)
      } else if (i % 2 === 0 && i % 3 === 0) {
        console.log(`${[i]} is even and is multiple of 3`)
      } else if (i % 2 == 1 && i % 3 === 0) {
        console.log(`${[i]} is odd and is multiple of 3`)
      } else if (i % 2 === 0 && i % 10 === 0) {
        console.log(`${[i]} is even and is a multiple of 10`)
      } else if (i % 2 == 1 && i % 10 === 0) {
        console.log(`${[i]} is odd and is a multiple of 10`)
      } else if (i % 2 === 0) {
        console.log(`${[i]} is even`)
      } else if (i % 2 == 1) {
        console.log(`${[i]} is odd`)
      } else if (i % 3 === 0) {
        console.log(`${[i]} is multiple of 3`)
      } else if (i % 10 === 0) {
        console.log(`${[i]} is a multiple of 10`)
      }
    }
  }
  checkDivision(
    Number(prompt("Enter begin of range")),
    Number(prompt("Enter end of range"))
  )