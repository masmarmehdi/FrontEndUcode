class Human{
    constructor(firstName, lastName, gender, age, calories){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    } 
    sleepFor(){
        let sleep = prompt("How many seconds?");
        document.getElementById("sleep").innerHTML = "I'm sleeping...";
        setTimeout(function(){
        document.getElementById("sleep").innerHTML = "I'm awake now";
        },1000*sleep);
        
    }
    feed(){
        if(this.calories < 500){
        document.getElementById("feed").innerHTML = "Nom nom nom..";
        setTimeout(function(){
            document.getElementById("feed").innerHTML = "";
        }, 10000);

            this.calories += 200;
            document.getElementById("feed").innerHTML = "Nom nom nom..";
            setTimeout(() => {
                document.getElementById("calories").innerHTML = this.calories;
                if(this.calories < 500)
                document.getElementById("feed").innerHTML = "I'm still hungry";
            }, 10000);
            
        }
        else if(this.calories == 400){
            document.getElementById("feed").innerHTML = "";
        }
        else{
            document.getElementById("feed").innerHTML = "I'm not hungry";
            setTimeout(() => {
                document.getElementById("feed").innerHTML = "";
            }, 5000);
        }
    }
}
class Superhero extends Human{
    fly(){
        document.getElementById("fly").innerHTML = "I'm flying";
        setTimeout(function(){
            document.getElementById("fly").innerHTML = "";
        },10000);
    }
    fightWithEvil(){
        document.getElementById("fight").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(function(){
            document.getElementById("fight").innerHTML = "";
        },10000);
    }
}
let human = new Human();

human.calories = 0;

document.getElementById("calories").innerHTML = human.calories;

setInterval(function(){
    if(human.calories===0){
        document.getElementById("feed").innerHTML = "I'm hungry";
    }
}, 5000);

setInterval(function(){
    if(human.calories > 0){
            human.calories -=  200;
            document.getElementById("calories").innerHTML = human.calories; 
        }
        else{
            document.getElementById("feed").innerHTML = "I'm hungry";
        }   
}, 60000);

let superhero = new Superhero();