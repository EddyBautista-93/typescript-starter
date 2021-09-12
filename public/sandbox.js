"use strict";
var greet;
greet = function () { return console.log("Hello world"); };
var add = function (a, b, c) { return console.log(a + b, c); };
// explicit return type
var minus = function (a, b) { return a + b; };
// type becomes type of return value
var result = minus(3, 1);
