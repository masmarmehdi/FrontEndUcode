let tableElement = [
    ["Black Pantera", 66, 53],
    ["Captain America", 79, 137],
    ["Captain Marvel", 97, 26],
    ["Hulk", 80, 49],
    ["Iron Man", 88, 48],
    ["Spider-Man", 78, 16],
    ["Thanos", 99, 1000],
    ["Thor", 95, 1000],
    ["Yon-Rogg", 73, 52]
]; 

let head = ["Name", "Strength", "Age"];
let sort = ['ASC','DESC'];

// Creating a function for creting the whole table
function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var tr = document.createElement('tr');
    //Creation of the table head
    for (let i = 0; i < head.length; i++) {
        var th = document.createElement('th');
        th.append(document.createTextNode(head[i]));
        th.className = head[i];
        th.onclick = function() { sortTable(head[i]); };
        tr.append(th);
    }
    tableHead.append(tr);

    //Creationg of the table body
    var tableBody = document.createElement('tbody');
    for (var i = 0, j = 0; i < tableElement.length; i++) {
        var tr = document.createElement('tr');
        for (var k = 0; k < head.length; k++) {
            var td = document.createElement('td');
            td.append(document.createTextNode(tableElement[i][k]));
            td.id = `data ${j}`;
            j++;
            tr.append(td);
        }
        tableBody.append(tr);
    }
    // Appending the table
    table.append(tableHead);
    table.append(tableBody);
    body.append(table);

}
tableCreate(tableElement);
function sortTable(sortBy){
    var index1, index2, index3; // those variables for placing the indexes as I wanted it to be
    if(sortBy === "Name"){
        index1 = 0; index2 = 1; index3 = 2;
        if(document.getElementById("notification").innerHTML !== `Sorting by ${head[0]}, order: ${sort[0]}`){
            document.getElementById("notification").innerHTML = `Sorting by ${head[0]}, order: ${sort[0]}`;
            sortASC(tableElement, index1, index2, index3);
        }else{
            document.getElementById("notification").innerHTML = `Sorting by ${head[0]}, order: ${sort[1]}`;
            sortDESC(tableElement,index1, index2, index3);
        }
    }
    if(sortBy === "Strength"){
        index1 = 1; index2 = 0; index3 = 2;
        if(document.getElementById("notification").innerHTML !== `Sorting by ${head[1]}, order: ${sort[0]}`){
            document.getElementById("notification").innerHTML = `Sorting by ${head[1]}, order: ${sort[0]}`;
            sortASC(tableElement, index1, index2, index3);
        }else{
            document.getElementById("notification").innerHTML = `Sorting by ${head[1]}, order: ${sort[1]}`;
            sortDESC(tableElement, index1, index2, index3);
        }
    }
    if(sortBy === "Age"){
        index1 = 2; index2 = 1; index3 = 0;
        if(document.getElementById("notification").innerHTML !== `Sorting by ${head[2]}, order: ${sort[0]}`){
            document.getElementById("notification").innerHTML = `Sorting by ${head[2]}, order: ${sort[0]}`;
            sortASC(tableElement,index1, index2, index3);
        }else{
            document.getElementById("notification").innerHTML = `Sorting by ${head[2]}, order: ${sort[1]}`;
            sortDESC(tableElement,index1, index2, index3);
        }
    }
    // Accessing my data on each 
    for (var i = 0, k = 0; i < tableElement.length; i++) {
        document.createElement('tr');
        for (var j = 0; j < head.length; j++) {
            document.createElement('td');
            if(head[j] == 'Name'){
                document.getElementById(`data ${k}`).innerHTML = tableElement[i][j]; 
                k++;
            }
            else if(head[j] == 'Strength'){
                document.getElementById(`data ${k}`).innerHTML = tableElement[i][j]; 
                k++;
            }
            else if(head[j] == 'Age'){
                document.getElementById(`data ${k}`).innerHTML = tableElement[i][j]; 
                k++;
            }
        }
    }
}

function sortASC(tableElement, index1, index2, index3){
    // Using BUBBLE SORT to solve this problem
    var swapp;
    var n = tableElement.length-1;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (tableElement[i][index1] > tableElement[i+1][index1])
            {
                // Sort by names
               var temp = tableElement[i][index1];
               tableElement[i][index1] = tableElement[i+1][index1];
               tableElement[i+1][index1] = temp;
               // Sort by strength
               temp = tableElement[i][index2];
               tableElement[i][index2] = tableElement[i+1][index2];
               tableElement[i+1][index2] = temp;
               //  Sort by age
               temp = tableElement[i][index3];
               tableElement[i][index3] = tableElement[i+1][index3];
               tableElement[i+1][index3] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    return tableElement;
}
function sortDESC(tableElement, index1, index2, index3){
    // Using BUBBLE SORT to solve this problem
    var swapp;
    var n = tableElement.length-1;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (tableElement[i][index1] < tableElement[i+1][index1])
            {
                // Sort by names
               var temp = tableElement[i][index1];
               tableElement[i][index1] = tableElement[i+1][index1];
               tableElement[i+1][index1] = temp;
               // Sort by strength
               temp = tableElement[i][index2];
               tableElement[i][index2] = tableElement[i+1][index2];
               tableElement[i+1][index2] = temp;
               // Sort by age
               temp = tableElement[i][index3];
               tableElement[i][index3] = tableElement[i+1][index3];
               tableElement[i+1][index3] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    return tableElement;
}