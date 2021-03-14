function  HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this._averageBuildSpeed = 0.5;
    getDaysToBuild = function(){
        let average = this.size / this._averageBuildSpeed
        return average;
    }
}
houseBlueprint = HouseBuilder.prototype = {
    address: this.address,
    description : this.description,
    owner : this.owner,
    size : this.size,
    date: new Date(),
    getDaysToBuild : function(){
        let average = this.size / this._averageBuildSpeed
        return average;
    }
};

/*                       Testing
let houseBlueprint = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',110,5);
console.log(house.date.toDateString());
console.log(house._averageBuildSpeed);
console.log(house.getDaysToBuild());
console.log(house.size);
console.log(house.owner);*/