export function fizzbuzz(num:number): number | string{
    if(num===0) return 0;
    if(isDivisible(num,3) && isDivisible(num,5)) return 'fizzbuzz';
    if(isDivisible(num,3)) return 'fizz';
    if(isDivisible(num,5)) return 'buzz';
    return num;
}

function isDivisible(num:number, divisor:number):boolean {
    if (num % divisor === 0) return true;
    return false;
}