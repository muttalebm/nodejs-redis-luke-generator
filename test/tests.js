const chai= require('chai');
const assert = chai.assert;
const expect = chai.expect

let generator= require('../index')
describe('Returns a Luke Command', function() {
    describe('With proper syntax', function() {
        let commands=generator.generate("SET key value")
        it('should return -1 a string', function() {
            expect(commands).to.be.an('string');
        });
        it('should start with *',function(){
            expect(commands.indexOf("*3")).to.be.equal(0)
        });
        it(`should return exactly \"`+'*3\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n' +`\"`,function(){
           expect(commands).to.equal('*3\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n');
        });
    });
});

describe('Returns a Luke Command', function() {
    describe('With proper syntax', function() {
        let commands=generator.generate("SET key value EX 60")
        it('should return a string', function() {
            expect(commands).to.be.an('string');
        });
        it('should start with *',function(){
            expect(commands.indexOf("*5")).to.be.equal(0)
        });
        it(`should return exactly \"`+'*5\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n$2\r\nEX\r\n$2\r\n60\r\n' +`\"`,function(){
            expect(commands).to.equal('*5\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n$2\r\nEX\r\n$2\r\n60\r\n');
        });
    });
});
