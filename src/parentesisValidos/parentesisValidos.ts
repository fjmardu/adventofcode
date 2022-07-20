export function parentesisValidos(cadena: string): boolean {
    const pila: string[] = [];
    const hashParentesis =new Map();
    hashParentesis.set("(",")");
    hashParentesis.set("[","]");
    hashParentesis.set("{","}");
  
    let resultado = true;
  
    for(const char of cadena){
        if (!isValidChar(char)) return false;
  
        //Busca en la tabla de hash el paréntesis de cierre del char
        const parentesisCierre = hashParentesis.get(char);
    
        if (parentesisCierre) {
          pila.push(parentesisCierre);
        } else {
          //Es un paréntesis de cierre, así que lo comparo con el último de la pila
          const lastPilaValue = pila.pop();
          if (char !== lastPilaValue) {
            //Si el paréntesis de cierre no es igual al char analizado, la cadena no es válida
            resultado = false;
            return false;
          }
        }
    }  
    
    return resultado;
  }
  
  function isValidChar(char: string): boolean {
    if (
      char === "{" ||
      char === "}" ||
      char === "(" ||
      char === ")" ||
      char === "[" ||
      char === "]"
    )
      return true;
    return false;
  }
  
  const input1 = "([]}}])"; //no válido
  const input2 = "(([]{[()[]]}))"; //sí válido  
  console.log("input1 ->", parentesisValidos(input1));
  console.log("input2 ->", parentesisValidos(input2));
  