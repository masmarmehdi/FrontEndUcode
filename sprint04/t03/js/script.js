let images = ['batman.jpeg','ironman.jpeg','spiderman.jpeg','superman.jpeg'];

function slideRight(){
    for(let i = 0; i < images.length; i++){
        var current = document.getElementById("image").src;
        if(current.includes(images[images.length -1])){
            document.getElementById('image').src = `assets/images/${images[0]}`;
            break;
        }
        if(current.includes(images[i])){
            document.getElementById('image').src = `assets/images/${images[i+1]}`;
            break;
        }
    }
}
function slideLeft(){
    for(let i = images.length-1; i >=0; i--){
        var current = document.getElementById("image").src;
        if(current.includes(images[0])){
            document.getElementById('image').src = `assets/images/${images[images.length-1]}`;
            break;
        }
        if(current.includes(images[i])){
            document.getElementById('image').src = `assets/images/${images[i-1]}`;
            break;
        }
    }
}
function autoSlides(images){
    setInterval(function(){
        for(let i =0; i < images.length; i++){
                var current = document.getElementById("image").src;
                if(current.includes(images[images.length -1])){
                document.getElementById('image').src = `assets/images/${images[0]}`;
                break;
            }
                if(current.includes(images[i])){
                document.getElementById('image').src = `assets/images/${images[i+1]}`;
                break;
            }
        }
    },3000);
}
autoSlides(images);