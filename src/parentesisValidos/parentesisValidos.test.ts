import {parentesisValidos} from "./parentesisValidos"

describe('parentesis válidos', () => {
    test('should to be false because some value of input is distint of [ or ( of {', ()=>{        
        const result:boolean = parentesisValidos(`[3)){'`);
        expect(result).toBeFalsy();
    });

    test('should to be false because input string is not valid', ()=>{        
        const result:boolean = parentesisValidos('[()){}');
        expect(result).toBeFalsy();
    });

    test('should to be true because input string is valid', ()=>{        
        const result:boolean = parentesisValidos('[]{({})}');
        expect(result).toBeTruthy();
    });
});