const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require ('./lib/shapes');
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
class Svg{
    constructor(){
        this.userText = ''
        this.userShape = ''

    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    }
    textSelect (text,color){
        this.userText = `<text x="140" y="120" text-anchor="middle" font-size="40" fill="${answers.userText}">${answers.textColor}</text>`;
    }
    shapeSelect (shape){
        this.shapeSelect = userShape.render()
        
    }
};
function generateLogo (response) {
    let userShape
    if( response.shape === "Circle" ){
        userShape = new Circle(response.userText,response.textColor,response.shapeColor)
        return userShape.render()
    }
    if( response.shape === "Square" ){
        userShape = new Square(response.userText,response.textColor,response.shapeColor)
        return userShape.render()
    }
    if( response.shape === "Triangle" ){
        userShape = new Triangle(response.userText,response.textColor,response.shapeColor)
        return userShape.render()
    }
   
    var svg = new Svg();
	svg.setUserText(userText, textColor);
	svg.setUserShape(userShape);
	svgString = svg.render();
	writeToFile(svg_file, svgString); 

};
function init(){
    inquirer
        .prompt(questions)
        .then((response) => {
            generateLogo(response);
        })
        .catch(err => {
            console.log(err);
        });
};
init ();