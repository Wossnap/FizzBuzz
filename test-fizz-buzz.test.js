const { describe } = require('yargs');
const fizzbuzz=require('./fizzbuzz')

describe('fizzBuzz', ()=>{
    
    test('should return undefined when the input is 0', () => {
        expect(fizzBuzz(0)).toBe(0);
      });
    
      test('should return fizz when the input 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
      });
    
      test('should return buzz when the input 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
      });
    
      test('should return fizzbuzz when the input 15', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
      });  
})
