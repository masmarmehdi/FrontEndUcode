let tableElement = [
    {name: "Black Pantera", strength: 66, age: 53},
    {name: "Captain America", strength: 79, age: 137},
    {name: "Captain Marvel", strength: 97, age: 26},
    {name: "Hulk", strength: 80, age: 49},
    {name: "Iron Man", strength: 88, age: 48},
    {name: "Spider-Man", strength: 78, age: 16},
    {name: "Thanos", strength: 99, age: 1000},
    {name: "Thor", strength: 95, age: 1000},
    {name: "Yon-Rogg", strength: 73, age: 52}
  ]; 
let headerElement = ['Name', 'Strength', 'Age'];
  
let table = document.createElement('table');
table.classList.add('table');
document.body.append(table);
  
let tablehead = document.createElement('thead');
tablehead.classList.add('tableHeader');
table.append(tablehead);
  
let tablebody = document.createElement('tbody');
tablebody.classList.add('tableBody');
table.append(tablebody);
  
let tr = document.createElement('tr');
tablehead.append(tr);

headerValue = document.getElementById('headerValue');
  
sortValue = document.getElementById('sortValue');
  
for (let c = 0; c < headerElement.length; c++) {
    let th = document.createElement('th');
    th.insertAdjacentHTML(`beforeend`, `${headerElement[c]}`);
    th.setAttribute('id',`header${c}`);
    tr.append(th);
  }
  
let renderCell = function(){
    tablebody.innerHTML = '';
    for (let i = 0; i < tableElement.length; i++) {
      let tr = document.createElement('tr');
      tablebody.append(tr);
      for (let j = 0; j < Object.keys(tableElement[0]).length; j++) {
        let td = document.createElement('td');
        td.insertAdjacentHTML(`beforeend`, `${Object.values(tableElement[i])[j]}`);
        tr.append(td);
      }
    }
}
  
renderCell();

document.querySelector('#header0').addEventListener('click', function (event){
    if (event.target.innerText === 'Name'){
      headerValue.innerHTML = '';
      headerValue.insertAdjacentHTML('beforeend', `Name`);
        tableElement.sort(function(a, b){
            if(a.name > b.name)
                return  -1;
            else{
                return 1;
            }
        });
        sortValue.innerHTML = '';
        sortValue.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
    }
  });

document.querySelector('#header1').addEventListener('click', function (event){
    if (event.target.innerText === 'Strength'){
      headerValue.innerHTML = '';
      headerValue.insertAdjacentHTML('beforeend', `Strength`);
        tableElement.sort(function(a, b){
            if(a.strength > b.strength)
                return  -1;
            else{
                return 1;
            }
        });
        sortValue.innerHTML = '';
        sortValue.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
    }
});

document.querySelector('#header2').addEventListener('click', function (event){
    headerValue.innerHTML = '';
    headerValue.insertAdjacentHTML('beforeend', `Age`);
    if (event.target.innerText === 'Age'){

        tableElement.sort(function(a, b){
            if(a.age > b.age)
                return  -1;
            else{
                return 1;
            }
        });
        sortValue.innerHTML = '';
        sortValue.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
    }
});

/*
function tableCreate() {
    let names = ["Black Panther", "Captain America", "Captain Marvel", "Hulk", "Iron Man", "Spider-Man", "Thanos", "Thor", "Yon-Rogg"];
    let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
    let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];
    let data = [names, strength, age];
    let head = ["Name", "Strength", "Age"];
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    var thd = document.createElement('thead');
    var tr = document.createElement('tr');
    for (let i = 0; i < head.length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(head[i]));
        td.className = head[i];
        tr.appendChild(td);
    }
    thd.appendChild(tr);
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < names.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < head.length; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data[j][i]));
            tr.appendChild(td);
        }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(thd);
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
  
}
tableCreate();
function sortTable(){
    let names = ["Black Panther", "Captain America", "Captain Marvel", "Hulk", "Iron Man", "Spider-Man", "Thanos", "Thor", "Yon-Rogg"];
    let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
    let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];
    let data = [names, strength, age];
    strength.sort((a,b)=>a-b);
    age.sort((a,b)=>a-b);
    let head = ["Name", "Strength", "Age"];
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    var thd = document.createElement('thead');
    var tr = document.createElement('tr');
    for (let i = 0; i < head.length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(head[i]));
        td.className = head[i];
        tr.appendChild(td);
    }
    thd.appendChild(tr);
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < names.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < head.length; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data[j][i]));
            tr.appendChild(td);
        }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(thd);
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
}
sortTable();*/