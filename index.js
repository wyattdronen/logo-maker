const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require ('./lib/shapes');
const { response } = require('express');
const questions = [
    {
    type: "input",
    name: "userText",
    message: "Enter 3 or less characters",
    },
    {
    type: "input",
    name: "textColor",
    message: "Enter a color for text",
    },
    {
    type: "input",
    name: "shapeColor",
    message: "Enter a color for shape",
    },
    {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["Circle", "Square", "Triangle"],
    },
];

inquirer.prompt(questions).then(response => {

    let shape;
    if( response.shape === "Circle" ){
        shape = new Circle(response.userText,response.textColor,response.shapeColor)
        return shape.render()
    }
    if( response.shape === "Square" ){
        shape = new Square(response.userText,response.textColor,response.shapeColor)
        return shape.render()
    }
    if( response.shape === "Triangle" ){
        shape = new Triangle(response.userText,response.textColor,response.shapeColor)
        return shape.render()
    }
    
   // generate svg text
 const svgText = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="50" y="60" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.userText}</text>
    </svg>`;

fs.writeFileSync('logo.svg',svgText);
});
function init() {
 inquirer.prompt(questions)
    .then((response) => {
 svgText(response);
     })
 .catch(err => {
    console.log(err)
     });
    }

init();