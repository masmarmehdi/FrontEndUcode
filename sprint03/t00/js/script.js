function HouseBuilder(adress, description, owner, size, roomCount){
    this.adress = adress;
    this.description =description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this._averageBuildSpeed = 0.5;
    this.getDaysToBuild = function(){
        return this.size / this._averageBuildSpeed;
    }
}
houseBluePrint = HouseBuilder.prototype = {
    date : new Date()
}
let house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',110,5);
console.log(house.date.toDateString());
console.log(house._averageBuildSpeed);
console.log(house.getDaysToBuild());