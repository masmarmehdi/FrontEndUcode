// creating a prototype called removeDuplicates
String.prototype.removeDuplicates = function() {
    this.str = ''; // initialzing the string as an empty one
    for (let i = 0; i < this.length; i++) { 
        if (this[i] != ' ' || this[i + 1] != ' '){ // checking wether the string has some extra spaces
            this.str += this[i];
        }
    }
    this.str = this.str.split(' ');
    for (let j = 0; j < str.length; j++) {
        let thisIndex = this.str.indexOf(str[j], j+1);// searching for the index of str[j] starting from j+1
        if (thisIndex != -1) {
            this.str.splice(thisIndex, 1);
            j--;
        }
    }
    return this.str.join(' ');
}
// Example for testing 
let str = "Giant Spiders?   What’s next? Giant Snakes? ";
console.log(str);
str = str.removeDuplicates();
console.log(str);
str= ". . . . ? . . . . . . . . . . . ";
console.log(str);// . . . . ? . . . . . . . . . . .
str= str.removeDuplicates();
console.log(str);// . ?
