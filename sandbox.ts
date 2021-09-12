// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;



// arrays

// initialize as a empty array to use array methods like push
let strArray: string[];

let numArray: number[];


// union types
let mixed : (string|number)[] = [];
mixed.push("hello")
mixed.push("hi")
mixed.push(123)
mixed.push(.12)
mixed.push(-2)

console.log(mixed);

// objects
let personOne: object;

personOne = { name: 'yoshie', age:20 };

let PersonTwo: {
    name: string,
    age: number,
    belt: string
}

PersonTwo = { name:"Eddy", age: 27, belt: "red"};