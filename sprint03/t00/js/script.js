/*let houseBlueprint={
    address:,
    date:,
    description:,
    owner,
    size
}*/
function HouseBuilder(address, date, description, owner, size){
    this.address = address;
    this.date = date;
    this.description = description;
    this.owner = owner;
    this.size = size;
}

const house = new HouseBuilder(
    '88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J.Smith',
    110);

console.log(house.address);
console.log(house.description);
console.log(house.size);