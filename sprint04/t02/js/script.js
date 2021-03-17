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
document.body.append(table);
  
let tablehead = document.createElement('thead');
table.append(tablehead);
  
let tablebody = document.createElement('tbody');
table.append(tablebody);
  
let tr = document.createElement('tr');
tablehead.append(tr);
  
for (let thead = 0; thead < headerElement.length; thead++) {
    let th = document.createElement('th');
    th.innerHTML = headerElement[thead];
    th.setAttribute('id',`header${thead}`);
    tr.append(th);
  }
  
let renderCell = function(){
    tablebody.innerHTML = '';
    for (let i = 0; i < tableElement.length; i++) {
      let tr = document.createElement('tr');
      tablebody.append(tr);
      for (let j = 0; j < Object.keys(tableElement[0]).length; j++) {
        let td = document.createElement('td');
        td.innerHTML = Object.values(tableElement[i])[j];
        tr.append(td);
      }
    }
}
  
renderCell();

document.querySelector('#header0').addEventListener('click', function (event){
    if (event.target.innerText === 'Name'){
        document.querySelector('#headerValue').innerHTML = '';
        document.querySelector('#headerValue').innerHTML = 'Name';
        if(tableElement.sort() == true){
            document.querySelector('#sortValue').innerHTML = '';
            document.querySelector('#sortValue').innerHTML = 'ASC';
            tableElement.sort() = false;
        }
        else{
            tableElement.reverse() == false;
            document.querySelector('#sortValue').innerHTML = '';
            document.querySelector('#sortValue').innerHTML = 'DSC';
        }
        renderCell();
    }
  });

document.querySelector('#header1').addEventListener('click', function (event){
    if (event.target.innerText === 'Strength'){
        document.querySelector('#headerValue').innerHTML = 'Strength';
        tableElement.sort((a, b) => a.strength-b.strength);
        document.querySelector('#sortValue').innerHTML = 'ASC';
        renderCell();
    }
});

document.querySelector('#header2').addEventListener('click', function (event){
    document.querySelector('#headerValue').innerHTML = 'Age';
    if (event.target.innerText === 'Age'){
        if(tableElement.sort((a, b) => a.age - b.age) == true){
            document.querySelector('#sortValue').innerHTML = 'ASC';
        }
        else{
            tableElement.sort((a,b) => b.age - a.age) = false;
            document.querySelector('#sortValue').innerHTML = 'ASC';
        }
        renderCell();
    }
});