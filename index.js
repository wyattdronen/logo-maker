const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require ('./lib/shapes');

    
    const questions = [
    {
    type: "input",
    name: "text",
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

class svg{
    constructor(){
        this.userText = ''
        this.userShape = ''

    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    }
    textSelect (text,color){
        this.userText = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.userText}">${answers.textColor}</text>`;
    }
    shapeSelect (shape){
        this.shapeSelect = shape.render()
        
    }
}


function generateLogo (response) {
    const svg = shape (response);
    fs.writeFile(fileName, svg, ()=> console.log('logo generated'));
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