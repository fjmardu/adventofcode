import { global } from '../global';


const inputTest:string=
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

const input:string[][]=global.inputToArrayStr(inputTest).map(line=>{
    return line.split('')
})

let input1:string[][]=[]
let input2:string[][]=[]
for(let item of input){
    input1.push([...item])
    input2.push([...item])
}
let adyacent:number=0    
let fuera:boolean=false
const check = (row:number, column:number, map:string[][])=>{        
    if(fuera) return
    if(column>=map[0].length-1){
        column=0
        row+=1        
        if(row>=map.length-1){  
            console.log(countFreeSeats(input1) + ' - ' + countFreeSeats(input2));          
            if(countFreeSeats(input1)===countFreeSeats(input2)){
                fuera=true
                return;
            }     
            input1=[]
                for(let item of input2){
                    input1.push([...item])
                }                                
                check(0, 0, input1)
        }
    }

    
    if(countAdycent(row,column,map)<4 && map[row][column]==='L') input2[row][column]='#'
    if(countAdycent(row,column,map)>=4 && map[row][column]==='#') input2[row][column]='L'
        
    check(row, column+1, input2)     

}

const countFreeSeats = (map:string[][]):number=>{
    let freeSeats:number=0
    for(let item of map){
        for(let item2 of item){
            if (item2==='#') freeSeats+=1
        }
    }
    return freeSeats
}

const countAdycent = (row:number, column:number, map:string[][]):number=>{    
    
    adyacent=0
    if(row ===0){
        switch (column) {
            case 0:
                //esquina
                break;
            case map[0].length-1:
                //esquina
                break;
        
            default:
                if(map[row+1][column-1]==='#') adyacent+=1
                if(map[row+1][column+1]==='#') adyacent+=1
                if(map[row+1][column-1]==='#') adyacent+=1

                if(map[row][column]==='#') adyacent+=1
                if(map[row][column+1]==='#') adyacent+=1
                break;
        }
    } else if( row === map.length-1){
        switch (column) {
            case 0:
                //esquina
                break;
            case map[0].length-1:
                //esquina
                break;
        
            default:
                if(map[row][column-1]==='#') adyacent+=1                
                if(map[row][column+1]==='#') adyacent+=1

                if(map[row-1][column-1]==='#') adyacent+=1                
                if(map[row-1][column]==='#') adyacent+=1
                if(map[row-1][column+1]==='#') adyacent+=1
                break;
        }
    }
    else{
        switch (column) {
            case 0:
                //lateral izquierdo
                if(map[row][column]==='#') adyacent+=1                
                if(map[row][column+1]==='#') adyacent+=1                                
                
                if(map[row][column]==='#') adyacent+=1                
                if(map[row][column+1]==='#') adyacent+=1              
                break;
            case map[0].length-1:
                //lateral derecho
                if(map[row][column]==='#') adyacent+=1                
                if(map[row][column-1]==='#') adyacent+=1                                

                if(map[row][column-1]==='#') adyacent+=1              
                if(map[row][column]==='#') adyacent+=1                                
                break;
        
            default:
                if(map[row-1][column-1]==='#') adyacent+=1                    
                if(map[row-1][column]==='#') adyacent+=1                
                if(map[row-1][column+1]==='#') adyacent+=1                

                if(map[row][column-1]==='#') adyacent+=1              
                if(map[row][column]==='#') adyacent+=1                
                if(map[row][column+1]==='#') adyacent+=1              
                
                if(map[row+1][column-1]==='#') adyacent+=1   
                if(map[row+1][column]==='#') adyacent+=1                
                if(map[row+1][column+1]==='#') adyacent+=1   
                break;
        }
    }    
    
    return adyacent    
}



check(0,0,input1)
console.log(input2);

