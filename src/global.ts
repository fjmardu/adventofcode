/*   public static inputToArrayInt(input: string): number[] {
    const arrayStr: string[] = input.split("\n");

    const arrayNumber: number[] = arrayStr.map((str) => parseInt(str));

    return arrayNumber;
  }

  public static inputToArrayStr(input: string): string[] {
    return input.split("\n");
  }

  public static inputToArrayStrSinEspacios(input: string): string[] {
    const fueraEspacios: string = input.replace(/ /g, "");
    return fueraEspacios.split("\n");
  }

  public static inputToStrArrayByBlankLine(input: string): string[] {
    //sustituyo las nuevas líneas por espacios
    input = input.replace(/(?:\r\n|\r|\n)/g, " ");
    const resp: string[] = input.split("  ");
    return resp;
  } */

  export function wantNumbersFrominputFile(pathFile: string): number[] {
    const fileData:string = readFile(pathFile);
    const inputToArray=fileData.split('\n');
    return inputToArray.map((n) => +n);
  }

  function readFile(pathFile:string):string{
    return Deno.readTextFileSync(pathFile);
  }

