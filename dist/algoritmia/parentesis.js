"use strict";
const cadena = '([]{{}})';
const pila = [];
const hashParentesis = {
    '(': ')',
    '{': '}',
    '[': ']'
};
let resultado = true;
for (let char of cadena) {
    const parentesisCierre = hashParentesis[char];
    if (parentesisCierre) {
        //Si existe el paréntesis de cierre lo añado a la pila y sigo con el siguiente item
        pila.push(parentesisCierre);
        continue;
    }
    //Si llego aquí es que es un paréntesis de cierre, así que lo comparo con el último de la pila
    const lastPilaValue = pila.pop();
    if (char !== lastPilaValue) {
        //Si el paréntesis de cierre no es igual al char analizado, la cadena no es válida
        resultado = false;
        break;
    }
}
console.log(resultado);
