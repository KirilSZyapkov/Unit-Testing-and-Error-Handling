function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let myObj = createCalculator();
myObj.add(2)
console.log(myObj.get());


// module.exports = createCalculator;