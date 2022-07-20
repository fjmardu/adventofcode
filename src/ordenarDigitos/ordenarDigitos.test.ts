import { ordenarDigitos } from './ordenarDigitos';

describe('digit order', () => {

    test('should print 12345 if it receive 43152', ()=>{
        let expected:number = 12345;
        let result:number = ordenarDigitos(43152);
        expect(expected).toBe(result);
    });
    
});