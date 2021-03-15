
let myList = document.getElementsByTagName('li');
for(let item of myList){
    if(item.className === null){
        item.className = "unknown";
    }
    else if(!item.getAttribute('data-element')){
        item.setAttribute('data-element','none');
    }
}


for(let item of myList){
    let de = item.getAttribute('data-element');
    let arrayAttribute = de.split(' ');
    let br = document.createElement('br');
    item.appendChild(br);
    for(let i = 0; i < arrayAttribute.length; i++){
        let div = document.createElement('div');
        if(arrayAttribute[i] === 'none'){
            item.insertAdjacentHTML('beforeend','<div class="elem"><div class="line"></div></div>');
        }
        else{
            div.classList.add(arrayAttribute[i]);
            div.classList.add('elem');
            item.append(div);
        }
    }
}