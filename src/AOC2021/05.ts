const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const realInput: string = Deno.readTextFileSync("src/AOC2021/05.txt");

function toCreateMap(test:boolean):number[][]{
    const map:number[][]=[];
    let mapDimmension=9;
    if(!test){
        mapDimmension=1000;
    }
    for(let line=0;line<=mapDimmension;line++){
        const line:number[]=[]
        for(let column=0;column<=mapDimmension;column++){
            line.push(-1);
        }
        map.push(line);
    }
    return map;
}

function drawLine(start:number[],end:number[], map:number[][]):number[][]{    
    let lineIndex=start[1];
    let columnIndex=start[0];
    do {
        console.log({lineIndex,columnIndex});
        map[lineIndex][columnIndex]+=1;  
        if (lineIndex<map.length-1)lineIndex++;
        if (columnIndex<map.length-1)columnIndex++;        
    } while (lineIndex<=end[1] && columnIndex<=end[0]);
    return map;
}

function play(test:boolean){
    let map=toCreateMap(test);
    map=drawLine([0,9],[5,9],map);
    console.log(map);    
}

console.time("play");
console.log(play(true));
console.timeEnd("play");


