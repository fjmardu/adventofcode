export class global{
    public static inputToArrayInt(input:string):number[]{
        const arrayStr:string[] = input.split('\n')
        
        const arrayNumber:number[]=arrayStr.map(str=> parseInt(str))
        
        return arrayNumber
    }

    public static inputToArrayStr(input:string):string[]{
        return input.split('\n')
    }

    public static inputToArrayStrSinEspacios(input:string):string[]{
        const fueraEspacios:string=input.replace(/ /g, "")
        return fueraEspacios.split('\n')
    }

    public static inputToStrArrayByNewLine(input:string):string[]{
        //sustituyo las nuevas líneas por espacios
        input = input.replace(/(?:\r\n|\r|\n)/g," ")        
        const resp:string[]= input.split("  ")        
        return resp
    }
}



