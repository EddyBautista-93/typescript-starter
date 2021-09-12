let greet: Function;

greet = () => console.log("Hello world");

const add = (a: number, b: number, c?: number|string):void => console.log(a + b, c);
                                  // explicit return type
const minus = (a:number, b:number):Number => a + b;
// type becomes type of return value
let result = minus(3, 1);