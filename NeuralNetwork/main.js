//const brain = require("brain.js");
const input = document.querySelector("input");
const box = document.querySelector("#color");

input.addEventListener("change", (e)=>{
    const rgb = getRgb(e.target.value); //const from the rgb function
    const network = new brain.NeuralNetwork(); 
    console.log(rgb);
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

    const res = brain.likely(rgb, network);
    console.log(res);
});
//transform the rbg and divide into 255
function getRgb(hex){
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m,r,g,b){
        return r+r+g+g+b+b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55)/100,
        g: Math.round(parseInt(result[2], 16) / 2.55)/100,
        b: Math.round(parseInt(result[3], 16) / 2.55)/100,
    }:null;
}