class shape {
    constructor(){
        this.shapeColor = '';
    }
    setColor(colorVar) {
        this.shapeColor = colorVar;
    }
}

class Circle extends shape {
    render() {
     return `<circle cx="150" cy="115" r="80" fill="${this.Shapecolor}" />`;
 }
}
class Square extends shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
 }
}
class Triangle extends shape {
    render() {
     return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
 }
}
 

 module.exports = {Circle, Square, Triangle}