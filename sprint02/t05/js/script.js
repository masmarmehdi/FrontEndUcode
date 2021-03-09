function total(addCount, addPrice, currentTotal){
    let result;
    if(typeof currentTotal == 'undefined'){
        result = addCount * addPrice;
    }
    else{
        result = addCount * addPrice + currentTotal;
    } 
    return result;
}
