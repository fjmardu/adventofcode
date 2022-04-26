import { wantNumbersFrominputFile } from '../global.ts'

const testInput:number[]=[199,200,208,210,200,207,240,269,260,263]

const toResolveFirstPart=(input:number[])=>{
    let result=0;
    for(let i=1; i<input.length;i++){
        if(input[i]>input[i-1]) result ++;
    }
    return result;
}

const toResolveSecondPart=(input:number[])=>{
    let result=0;
    for(let i=2; i<input.length-1;i++){
        const firstSum=input[i]+ input[i-1]+input[i-2];
        const secondSum=input[i-1]+input[i]+input[i+1];
        if(firstSum<secondSum)result++;
    }
    return result;
}

console.time("dale");
console.log(toResolveSecondPart(wantNumbersFrominputFile('src/AOC2021/01.txt')));
console.timeEnd("dale");
