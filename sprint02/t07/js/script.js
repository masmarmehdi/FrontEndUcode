function sortEvenOdd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr.sort(function(a,b){
                return Math.abs(a % 2)  - Math.abs(b % 2) || a-b;
            })
        }
        else{
            arr.sort(function(a,b){
                return Math.abs(a % 2)  - Math.abs(b % 2) || a-b;
            })
        }
    }
    return arr;
}