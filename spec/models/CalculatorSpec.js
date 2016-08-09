describe('Calculator', function() {
    var Calculator = require('../../models/Calculator');

    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('multiply 7 and 9', function() {
        var result = calculator.multiply(7, 9);
        expect(result).toEqual(63);
    });

    it('multiply 5 and 0', function() {
        var result = calculator.multiply(5, 0);
        expect(result).toEqual(0);
    });

});
