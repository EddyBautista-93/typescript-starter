//arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3); can't add a different type


let mixed = ['string name ', 3, 4, false, true];

mixed.push('this works');
mixed.push(2); // also works 


// object 

// changing the values within the object or creating another object after being initialize is okay as long as the types stay the same and has all the values. 
let personObject = {
    name: 'Eddy',
    belt: 'black',
    age: 27
};


personObject.age = 40;
