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
HouseBuilder.prototype = {
    date:{ 
        toDateString: function() {
        var today = new Date();
        var dd = today.getDay();
        var currentday = String(today.getDate()).padStart(2, '0');
        let day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var mm = today.getMonth(); //January is 0!
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var yyyy = today.getFullYear();
        return (day[dd - 1] + ' ' + month[mm]+ ' '+ currentday + ' ' + yyyy);
        }
    },
}
let house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',110,5);
console.log(house.date.toDateString());
console.log(house._averageBuildSpeed);
console.log(house.getDaysToBuild());