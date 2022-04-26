const testInputFirstPart:string=`forward 5
down 5
forward 8
up 3
down 8
forward 2`

const testInput:string[]=testInputFirstPart.split('\n');
const realInput:string[] = Deno.readTextFileSync('src/AOC2021/02.txt').split('\n');

function playFirstPart(input:string[]):number{
    let xPosition=0;
    let yPosition=0;
    input.forEach(s=>{
        const sContain:string[]=s.split(' ');
        if(sContain[0]==='forward'){
            xPosition+= +sContain[1];
        }else if(sContain[0]==='up'){
            yPosition-= +sContain[1];
        }else if(sContain[0]==='down'){
            yPosition+= +sContain[1];
        }
    })
    return xPosition * yPosition;
}

function playSecondPart(input:string[]):number{
    let xPosition=0;
    let yPosition=0;
    let aimPosition=0;
    input.forEach(s=>{
        const sContain:string[]=s.split(' ');
        if(sContain[0]==='forward'){
            xPosition+= +sContain[1];
            yPosition+= aimPosition*+sContain[1];
        }else if(sContain[0]==='up'){
            aimPosition-= +sContain[1];
        }else if(sContain[0]==='down'){
            aimPosition+= +sContain[1];
        }
    })    
    return xPosition * yPosition;
}

console.log(playSecondPart(realInput));

