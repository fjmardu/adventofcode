export function ordenarDigitos(num:number): number{    
    return + num
    .toString()
    .split("")
    .sort((a,b)=>+a - +b)
    .join("");
}