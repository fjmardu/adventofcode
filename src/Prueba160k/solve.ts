function loadInputFile(pathFile: string): string {
  return Deno.readTextFileSync(pathFile);
}

const instructions = Array.from(loadInputFile("input.txt"));
let cursor = 0;
const data = [0];
let pointer = 0;
let resultString = "";
const loops: number[] = [];

const stack: number[] = [];
instructions.forEach((instruction, index) => {
  if (instruction === "🤜") {
    stack.push(index);
  } else if (instruction === "🤛") {
    const loopStart = stack.pop() || 0;
    loops[loopStart] = index;
    loops[index] = loopStart;
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
      data[pointer] = data[pointer] === 255 ? 0 : data[pointer] + 1;
      break;
    case "👇":
      data[pointer] = data[pointer] === 0 ? 255 : data[pointer] - 1;
      break;
    case "👊":
      resultString += String.fromCharCode(data[pointer]);
      break;
    case "🤜":
      if (data[pointer] === 0) {
        cursor = loops[cursor];
      }
      break;
    case "🤛":
      if (data[pointer] !== 0) {
        cursor = loops[cursor];
      }
      break;
    default:
      console.log("ERROR");
      break;
  }
  cursor += 1;
}

console.log(resultString);
