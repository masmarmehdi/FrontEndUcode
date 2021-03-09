let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
if(firstName.match(/[a-z]+/) && lastName.match(/[a-z]+/)){

    alert(`Hello ${firstName[0].toUpperCase()+ firstName.slice(1)} ${lastName[0].toUpperCase()+ lastName.slice(1)}!`);
    console.log(`Hello ${firstName[0].toUpperCase()+ firstName.slice(1)} ${lastName[0].toUpperCase()+ lastName.slice(1)}!`);
    
}
else{
    alert("Wrong input");
    console.log("Wrong input");
}