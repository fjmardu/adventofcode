import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {

    test('should print 0 if it receive 0', ()=>{
        let expected:number = 0;
        let result:number | string = fizzbuzz(0);
        expect(expected).toBe(result);
    });
    
    test('should print 1 if it receive 1', ()=>{
        const expected:number = 1;
        const result:number | string = fizzbuzz(1);
        expect(expected).toBe(result);
    });
    
    test('should print fizz if it receive a multiple of 3',()=>{
        const expected:string='fizz';
        const result:string | number = fizzbuzz(6);
        expect(expected).toBe(result);
    });

    test('should print buzz if it receive a multiple of 5',()=>{
        const expected:string='buzz';
        const result:string | number = fizzbuzz(10);
        expect(expected).toBe(result);
    });

    test('should print fizzbuzz if it receive a multiple of 3 andd 5',()=>{
        const expected:string='fizzbuzz';
        const result:string | number = fizzbuzz(15);
        expect(expected).toBe(result);
    });
});