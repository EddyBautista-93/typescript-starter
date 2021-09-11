let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 30; type number is not assignable to type 'string'
character = 'Eddy';

// age = '30'; string not assignable to number 
age = 28;

// isBlackBelt = 'yes'; string is not assignable to boolean 
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(32));

