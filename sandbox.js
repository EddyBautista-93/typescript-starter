var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 30; type number is not assignable to type 'string'
character = 'Eddy';
// age = '30'; string not assignable to number 
age = 28;
// isBlackBelt = 'yes'; string is not assignable to boolean 
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(32));
