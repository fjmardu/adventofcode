const testInput: string = "3,4,3,1,2";
const realInput: string = Deno.readTextFileSync("src/AOC2021/06.txt");

function getArrayFishes(input: string): number[] {
  return input.split(",").map((fish) => +fish);
}

function printFishes(fishes: number[]): string {
  let print = "";
  fishes.forEach((fish) => (print += `${fish}, `));
  return print;
}

function calculateFishesPartOne(fishes: number[], days: number): number[] {
  if (days === 0) return fishes;
  const newFishes = [...fishes];
  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i] > 0) {
      newFishes[i]--;
    } else {
      newFishes[i] = 6;
      newFishes.push(8);
    }
  }
  //console.log(printFishes(newFishes));
  return calculateFishesPartOne(newFishes, days - 1);
}

function calculateFishesPartTwo(fishes: number[], days: number) {
  const fishPerDay: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  fishes.forEach((fish) => {
    fishPerDay[fish]++;
  });
  console.log(fishPerDay);
  while (days > 1) {   
    const fishInDay0 = fishPerDay[0];
    for (let i = 0; i < 7; i++) {
      fishPerDay[i] = fishPerDay[i + 1];
    }
    fishPerDay[5] += fishInDay0;
    fishPerDay[7] = fishInDay0;
    console.log(fishPerDay);
    days--;
  }

    let result=0;
  fishPerDay.forEach(fish=>{
      result+=fish
  })
  console.log(result);
}

function play(input: string, days: number): number {
  const fishes: number[] = getArrayFishes(input);
  calculateFishesPartTwo(fishes, days);
  return fishes.length;
}

console.time("play");
play(testInput, 256);
console.timeEnd("play");
