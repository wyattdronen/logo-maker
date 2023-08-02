const Square = require('./shapes.js');

describe('Square', () => {
    test( 'square test', () => {
        const square = new Square('blue','333','green');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="73" y="40" width="160" height="160" fill="blue" />
            <text x="140" y="120" text-anchor="middle" font-size="40" fill="green">333</text>
        </svg>
        `
        );
    });
});