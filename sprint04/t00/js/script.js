function transformation(){
    if(document.querySelector('#hero').innerHTML == 'Bruce Banner'){
            document.querySelector('#hero').style = 'font-size:130px; letter-spacing:6px;';
            document.querySelector('#hero').innerHTML = 'Hulk';
            document.querySelector('#lab').style = 'background-color:#70964b';
    }
    else if(document.querySelector('#hero').innerHTML == 'Hulk'){
        document.querySelector('#hero').innerHTML = 'Bruce Banner';
        document.querySelector('#hero').style = 'font-size:60px; background-color:#ffb300; letter-spacing:2px;';
        document.querySelector('#lab').style = 'background-color:#ffb300;';
    }
}