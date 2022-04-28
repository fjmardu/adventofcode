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

function toCreateMap(test: boolean): number[][] {
  const map: number[][] = [];
  let mapDimmension = 9;
  if (!test) {
    mapDimmension = 1000;
  }
  for (let line = 0; line <= mapDimmension; line++) {
    const line: number[] = [];
    for (let column = 0; column <= mapDimmension; column++) {
      line.push(0);
    }
    map.push(line);
  }
  return map;
}

function getLineSign(startPoint: number[], endPoint: number[]): number {
  if (endPoint[1] === startPoint[1]) return 0;
  if (endPoint[1] > startPoint[1]) return 1;
  return -1;
}

function getColumnSign(startPoint: number[], endPoint: number[]): number {
  if (endPoint[0] === startPoint[0]) return 0;
  if (endPoint[0] > startPoint[0]) return 1;
  return -1;
}

function drawLine(
  startPoint: number[],
  endPoint: number[],
  map: number[][]
): number[][] {
  let lineIndex = startPoint[1];
  let columnIndex = startPoint[0];
  do {
    //console.log({lineIndex,columnIndex});
    map[lineIndex][columnIndex] += 1;
    if (lineIndex !== endPoint[1]) {
      const lineSign = getLineSign(startPoint, endPoint);
      lineIndex += 1 * lineSign;
    }
    if (columnIndex !== endPoint[0]) {
      const columnSign = getColumnSign(startPoint, endPoint);
      columnIndex += 1 * columnSign;
    }
  } while (lineIndex !== endPoint[1] || columnIndex !== endPoint[0]);
  //console.log({lineIndex,columnIndex});
  map[lineIndex][columnIndex] += 1;
  return map;
}

function getPointsAvoid(map: number[][]): number {
  let points = 0;
  map.forEach((row) => {
    row.forEach((cell) => {
      if (cell > 1) points++;
    });
  });
  return points;
}

function printMap(map: number[][]) {
  map.forEach((row) => {
    let printRow = "";
    row.forEach((cell) => {
      printRow += ` ${cell}`;
    });
    console.log(printRow);
  });
}

function isHorizontalOrVerticalLine(start: number[], end: number[]): boolean {
  if (start[0] === end[0] || start[1] === end[1]) return true;
  return false;
}

function playOnePart(input: string): number {
  const points = input.split("\n").map((point) => {
    return point.split(" -> ");
  });
  let map = toCreateMap(points.length < 20);
  points.forEach((point) => {
    const startPoint: number[] = point[0].split(",").map((point) => +point);
    const endPoint: number[] = point[1].split(",").map((point) => +point);
    if (isHorizontalOrVerticalLine(startPoint, endPoint)) {
      //console.log(`Línea desde ${point[0]} a ${point[1]}`);
      map = drawLine(startPoint, endPoint, map);
    }
  });

  printMap(map);

  const pointsAvoid = getPointsAvoid(map);
  return pointsAvoid;
}

function playTwoPart(input: string): number {
  const points = input.split("\n").map((point) => {
    return point.split(" -> ");
  });
  let map = toCreateMap(points.length < 20);
  points.forEach((point) => {
    const startPoint: number[] = point[0].split(",").map((point) => +point);
    const endPoint: number[] = point[1].split(",").map((point) => +point);

    //console.log(`Línea desde ${point[0]} a ${point[1]}`);
    map = drawLine(startPoint, endPoint, map);
  });

  printMap(map);

  const pointsAvoid = getPointsAvoid(map);
  return pointsAvoid;
}

console.time("play");
console.log(playTwoPart(realInput));
console.timeEnd("play");
