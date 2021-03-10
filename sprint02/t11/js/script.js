// add words function
function addWords(obj, wrds) {
    let arr = obj['words'];
    arr = arr + ' ' + wrds;
    arr = arr.split(' ');
    let uniqueResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (!~uniqueResult.indexOf(arr[i])) {
            uniqueResult.push(arr[i]);
        }
    }
    let result = [];
    for (let i in uniqueResult) {
        if (uniqueResult[i] != "") {
            result.push(uniqueResult[i]);
        }
    }
    obj['words'] = result.join(' ');
    return obj;
}

// remove words function
function removeWords(obj, wrds) {
    let arr = obj['words'];
    arr = arr.split(' ');
    //console.log(arr)
    let arr_del = wrds.split(' ');
    let result = [];
    for (let i in arr_del) {
        if (arr_del[i] != "") {
            result.push(arr_del[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        let index = arr.indexOf(result[i]);
        if (-1 < index) {
            arr.splice(index, 1);
        }
    }
    obj['words'] = arr.join(' ');
    return obj;
}

// change words function
function changeWords(obj, oldWrds, newWrds) {
    let arr = obj['words'];
    arr = arr.split(' ');
    let arr_del = oldWrds.split(' ');
    let arr2 = newWrds.split(' ');
    let result = [];
    for (let i in arr_del) {
        if (arr_del[i] != "") {
            result.push(arr_del[i]);
        }
    }    
    let result2 = [];
    for (let i in arr2) {
        if (arr2[i] != "") {
            result2.push(arr2[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {

        let index = arr.indexOf(result[i]);
        if (-1 < index) {
            arr.splice(index, 1);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        arr.push(arr2[i]);
    }
    obj['words'] = arr.join(' ');
    return obj;
}

const obj= {words: 'newspapers newspapers  books magazines'};

console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}
