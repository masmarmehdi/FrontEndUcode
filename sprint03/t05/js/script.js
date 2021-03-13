//      guestListstlist

var guestList = new WeakSet();
let arr = [
    guest1 = {
        name:'Mehdi'
    },
    guest2 = {
        name:'Ayoub'
    },
    guest3 = {
        name:'Orwa'
    },
    guest4 = {
        name:'Salah'
    },
    guest5 = {
        'Vlad':'Vlad'
    }
    ];
    guestList.add(guest1);
    guestList.add(guest2);
    guestList.add(guest3);
    guestList.add(guest4);
    guestList.add(guest5);


//             Menu 
    let menu = new Map();
    menu.set('Chess Burger',5);
    menu.set('Shawarma',4);
    menu.set('French fries', 3.5);
    menu.set('Pizza', 5.5);
    menu.set('Chicken legs 4p',8.1);
    menu.set('Sushi',8.1);


//            bankVault
    let bankVault = new Set();
    const client1={
        id:1,
        fullName:'Mehdi Masmar',
        address:'Studentska street 15/17',
        card:123456789
    }
    const client2={
        id:2,
        fullName:'Ayoub Elhadadi',
        address:'Pushkinska street',
        card:234567891
    }
    const client3={
        id:3,
        fullName:'Salah Eddine Elmanssouri',
        address:'Pushkinska street',
        card:345678912
    }
    const client4={
        id:4,
        fullName:'Orwa Staif',
        address:'Academica Pavlova street',
        card:456789123
    }
    bankVault.add(client1);
    bankVault.add(client2);
    bankVault.add(client3);
    bankVault.add(client4);


//         coinCollection
    let coin = new WeakMap();
    const coin1 = {
        value:1
    };
    const coin2 = {
        value:5
    };
    const coin3 = {
        value:10
    };
    const coin4 = {
        value:20
    };
    const coin5 = {
        value:1
    };
    coin.set(coin1,'1 cent');
    coin.set(coin2,'5 cents');
    coin.set(coin3,'10 cents')

let fullName=prompt("Enter your name to check wether your invited or not.");
var check = false;
for(let i = 0; i < arr.length ; i++){
    if(arr[i].name === fullName && guestList.has(arr[i])){
    alert("Yaayy ! You're in the list! This day is gonna be lite🔥🔥🔥");
    check = true;
    }
}
if(!check){ 
    let answer = prompt(`Unfortunately you're not invited... We are sorry ${fullName} 🥺`);
    if(answer == 'who' || answer == 'how many?'){
        alert(`Sorry Sir/Mam I can't tell you...🤭`);
    }
}
else{
    let decision = prompt('Would you like to see our menu ? If you wanna access one of them write the name:');
    while(!menu.has(decision)){
        decision = prompt(`We don't have this menu yet sir/Mam...😅 Try another one`);
    }
    if(decision == 'yes'){
        let allMenu = "";
        for(let food of menu){
            allMenu += `${food}$\n`;
        }
        alert(`${allMenu}`);
    }
    else if(menu.has(decision)){
        alert(`${decision} ${menu.get(decision)} $`);
    }
    
}
function forSet(bankVault){
    var cr = prompt("Type your credential number: ");
    for(const c of bankVault){
        if(c.card === +cr){
            alert(`Client:\nID: ${c.id}\nFull Name: ${c.fullName}\nAddress: ${c.address}\nBank Card: ${c.card}`);
        }
    }
}
forSet(bankVault);
alert(`coin1:\n${coin1.value}\ncoin2:\n${coin2.value}\ncoin1:\n${coin3.value}\ncoin2:\n${coin4.value}`)

