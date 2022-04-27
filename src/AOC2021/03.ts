const testInputFirstPart:string=`00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

const testInput=testInputFirstPart.split('\n');
const realInput:string[] = Deno.readTextFileSync('src/AOC2021/03.txt').split('\n');

function playPartOne(input:string[]):number{
    let gammaRate='';
    let epsilonRate='';
    for(let i=0; i<input[0].length;i++){        
        let totalOf0=0;
        let totalOf1=0;
        input.forEach(data=>{
            data[i]==='0'? totalOf0++ :totalOf1++
        })
        if(totalOf0>totalOf1){
            gammaRate =`${gammaRate}0`
            epsilonRate =`${epsilonRate}1`
        }else{
            gammaRate=`${gammaRate}1`;
            epsilonRate=`${epsilonRate}0`;   
        }
    }
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

function playPartTwo(input:string[]):number{
    return getO2(input,0)*getCO2(input,0);
}

function getO2(input:string[],index:number):number{
    if(input.length===1){
        console.log("O2=",parseInt(input[0], 2));
        return parseInt(input[0], 2); 
    } 
    let newInput:string[]=[];
    for(let i=0; i<input[0].length;i++){        
        let totalOf0=0;
        let totalOf1=0;
        input.forEach(data=>{
            data[index]==='0'? totalOf0++ :totalOf1++
        })
        if(totalOf0>totalOf1){
            newInput=input.filter(i=>i[index]==='0');
        }else{
            newInput=input.filter(i=>i[index]==='1');
        }
    }
    return getO2(newInput,index+1);
}

function getCO2(input:string[],index:number):number{
    if(input.length===1){
        console.log("CO2=",parseInt(input[0], 2));
        return parseInt(input[0], 2); 
    } 
    let newInput:string[]=[];
    for(let i=0; i<input[0].length;i++){        
        let totalOf0=0;
        let totalOf1=0;
        input.forEach(data=>{
            data[index]==='0'? totalOf0++ :totalOf1++
        })
        if(totalOf0>totalOf1){
            newInput=input.filter(i=>i[index]==='1');
        }else{
            newInput=input.filter(i=>i[index]==='0');
        }
    }
    return getCO2(newInput,index+1);
}

console.log(playPartTwo(realInput));