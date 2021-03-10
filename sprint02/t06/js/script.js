let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
if(firstName.match(/[a-zA-Z]+/) && lastName.match(/[a-zA-Z]+/)){
    if(firstName.match('^[a-z]') || lastName.match('^[a-z]')){
        
        alert(`Hello ${firstName[0].toUpperCase() + firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}!`);
        console.log(`Hello ${firstName[0].toUpperCase() + firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}!`);
    }
    if(firstName.match('^[A-Z]+[a-z-A-Z]') || lastName.match('^[A-Z]+[a-z-A-Z]')){
        alert(`Hello ${firstName[0] + firstName.slice(1).toLowerCase()} ${lastName[0] + lastName.slice(1).toLowerCase()}!`);
        console.log(`Hello ${firstName[0] + firstName.slice(1).toLowerCase()} ${lastName[0] + lastName.slice(1).toLowerCase()}!`);
    }
}
else{  
    alert("Wrong input");
    console.log("Wrong input");
}
