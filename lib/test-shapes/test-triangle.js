const Square = require('./shapes.js');

describe('Square', () => {
    test( 'triangle test', () => {
        const testTriangle = new Square('orange','ABC','blue');
        expect(testTriangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="orange" />
        <text x="140" y="120" text-anchor="middle" font-size="40" fill="blue">ABC</text>
        </svg>
        `
        );
    });
});