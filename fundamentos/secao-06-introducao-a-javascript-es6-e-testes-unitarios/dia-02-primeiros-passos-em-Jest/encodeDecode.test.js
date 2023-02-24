const {encode, decode} = require('./encodeDecode.js');
describe('Testa as funções encode e decode', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    })
    it('teste de vogais em encode a', () => {
        expect(encode('batata')).toEqual('b1t1t1');
    })
    it('teste de vogais em encode e', () => {
        expect(encode('ele')).toEqual('2l2');
    })
    it('teste de vogais em encode i', () => {
        expect(encode('xixi')).toEqual('x3x3');
    })
    it('teste de vogais em encode o', () => {
        expect(encode('ovo')).toEqual('4v4');
    })
    it('teste de vogais em encode u', () => {
        expect(encode('urubu')).toEqual('5r5b5');
    })
    it('teste de vogais em encode', () => {
        expect(encode('sequoia')).toEqual('s2q5431');
    })
    it('Test do número de caracteres', () => {
        expect(encode('maravilha').length).toEqual(9);
    });
})