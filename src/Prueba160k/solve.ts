function loadInputFile(pathFile: string): string {
  return Deno.readTextFileSync(pathFile);
}

const instructions = Array.from(loadInputFile("input.txt"));
let cursor = 0;
const data = [0];
let pointer = 0;
let resultString = "";
const loops = new Map;

//console.time("go");

const stack: number[] = []; //pila LIFO
instructions.forEach((instruction, index) => {
  if (instruction === "🤜") {
    stack.push(index);
  } else if (instruction === "🤛") {
    const loopStart = stack.pop() || 0;
    loops.set(loopStart,index);
    loops.set(index,loopStart);    
  }
});



while (cursor < instructions.length) {
  const instruction = instructions[cursor];

  switch (instruction) {
    case "👉":
      pointer += 1;
      if (pointer >= data.length) {
        data.push(0);
      }
      break;
    case "👈":
      pointer -= 1;
      break;
    case "👆":
      data[pointer] = checkValue(data[pointer] + 1);
      break;
    case "👇":
      data[pointer] = checkValue(data[pointer] - 1);
      break;
    case "👊":
      resultString += String.fromCharCode(data[pointer]);
      /* console.clear();
      console.log(resultString); */
      break;
    case "🤜":
      if (data[pointer] === 0) {
        cursor = loops.get(cursor);
      }
      break;
    case "🤛":
      if (data[pointer] !== 0) {
        cursor = loops.get(cursor);
      }
      break;
    default:
      console.log("ERROR");
      break;
  }
  cursor += 1;
}

function checkValue(value: number): number {
  if (value < 0) return 255;
  if (value > 255) return 0;
  return value;
}

console.timeEnd("go");
console.log(resultString);
