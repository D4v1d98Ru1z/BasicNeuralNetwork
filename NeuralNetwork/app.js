const brain = require("brain.js");
const network = new brain.NeuralNetwork();


//Take the rgb color an divide into 255: ex, 118/255 
network.train([
    {input: {r: 0.58, g: 0.82, b: 0.57}, output: {light: 1}},
    {input: {r: 0.41, g: 0.36, b: 0.07}, output: {dark: 1}},
    {input: {r: 1, g: 0.32, b: 0.32}, output: {light: 1}},
    {input: {r: 1, g: 0.32, b: 0.32}, output: {light: 1}},
    {input: {r: 1, g: 1, b: 1}, output: {light: 1}},
    {input: {r: 0, g: 0, b: 0}, output: {dark: 1}},
    {input: {r: 0, g: 0.18, b: 0.66}, output: {dark: 1}},
    {input: {r: 0.46, g: 0.06, b: 0.41}, output: {dark: 1}}
]);

//r:0.10, g: 0.33, b: 0.16
var color = {r:0.96, g: 1, b: 0};
const result = network.run(color);
console.log("color: " + JSON.stringify(color));
console.log(result);