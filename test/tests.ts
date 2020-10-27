import {expect} from 'chai';
import {LukeGenerator} from "../LukeGenerator";

let generator = new LukeGenerator();

describe("Returns a Luke Command for 'SET key value' ", () => {
    describe('With proper syntax', () => {
        let basic = generator.generate(["SET", "key", "value"])
        it('should return -1 a string', () => {
            expect(basic).to.be.an('string');
        });
        it('should start with *3', () => {
            expect(basic.indexOf("*3")).to.be.equal(0)
        });
        it(`should return exactly \"` + '*3\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n' + `\"`, () => {
            expect(basic).to.equal('*3\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n');
        });
    });
});
describe("Returns a Luke Command for 'SET key value EX 60'", () => {
    describe('With proper syntax', () => {
        let withExpiry = generator.generate(["SET", "key", "value", "EX", "60"])
        it('should return a string', () => {
            expect(withExpiry).to.be.an('string');
        });
        it('should start with *5', () => {
            expect(withExpiry.indexOf("*5")).to.be.equal(0)
        });
        it(`should return exactly '*5\\r\\n$3\\r\\nSET\\r\\n$3\\r\\nkey\\r\\n$5\\r\\nvalue\\r\\n$2\\r\\nEX\\r\\n$2\\r\\n60\\r\\n'`, () => {
            expect(withExpiry).to.equal(`*5\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n$2\r\nEX\r\n$2\r\n60\r\n`);
        });
    });
});

describe("Returns a Luke Command for 'SET key1 ${JSON.stringify({\"key\":\"value\",\"foo\":\"bar\"})} EX 60'", () => {
    describe('With proper syntax', () => {
        let data = {
            "key": "value",
            "foo": "bar"
        };
        let jsonValue = generator.generate(["SET", "key1", JSON.stringify(data) , "EX","60"])
        it('should return a string', () => {
            expect(jsonValue).to.be.an('string');
        });
        it('should start with *5', () => {
            expect(jsonValue.indexOf("*5")).to.be.equal(0)
        });
        it(`should return exactly \"` + '*5\r\n$3\r\nSET\r\n$4\r\nkey1\r\n$27\r\n{"key":"value","foo":"bar"}\r\n$2\r\nEX\r\n$2\r\n60\r\n' + `\"`, () => {
            expect(jsonValue).to.equal('*5\r\n$3\r\nSET\r\n$4\r\nkey1\r\n$27\r\n{"key":"value","foo":"bar"}\r\n$2\r\nEX\r\n$2\r\n60\r\n');
        });
    });
});
