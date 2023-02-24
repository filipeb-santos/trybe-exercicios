const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testa a função myFizzBuzz', () => {
    it('Verifica se, de acordo com o número ou valor adicionado, retorna o esperado', () => {
        expect(myFizzBuzz('olá')).toBe(false);
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(7)).toBe(7);
        expect(myFizzBuzz(20)).toBe('buzz');         
    })
});