const testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const realInput: string = Deno.readTextFileSync("src/AOC2021/04.txt");

function searchAndChangeNumberInBoards(
  boards: number[][][],
  _number: number
): number[][][] {
  return boards.map((board) => {
    return board.map((line) => {
      return line.map((cell) => {
        if (cell === _number) cell = -1;
        return cell;
      });
    });
  });
}

function checkLine(line: number[]): boolean {
  if(!line) return false;
  const toCount = line.filter((cell) => cell === -1);
  if (toCount.length === 5) return true;
  return false;
}

function changeTwoSpacesByOneSpaces(board: string[]): string[] {
  return board.map((line) => line.replaceAll("  ", " "));
}

function deleteFirstSpace(board: string[]): string[] {
  return board.map((line) => {
    if (line[0] === " ") line = line.slice(1, line.length);
    return line;
  });
}

function checkColumn(board: number[][]): boolean {
  if(board.length===0) return false;
  for (let column = 0; column < 5; column++) {
    let howManyX = 0;
    for (let line = 0; line < 5; line++) {
      if (board[line][column] === -1) howManyX++;
    }
    if (howManyX === 5) return true;
  }
  return false;
}

function checkLineOrColumnComplet(boards: number[][][]): number {
  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    for (let lineIndex = 0; lineIndex < 5; lineIndex++) {
      if (checkLine(boards[boardIndex][lineIndex])) return boardIndex;
    }
    if (checkColumn(boards[boardIndex])) return boardIndex; 
  }
  return -1;
}

function getBoardsByCells(boards: string[]): number[][][] {
  const boardsByCells: number[][][] = [];

  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    let boardByLines = boards[boardIndex].split("\n");
    boardByLines = changeTwoSpacesByOneSpaces(boardByLines);
    boardByLines = deleteFirstSpace(boardByLines);

    const boardByCells: number[][] = [];
    for (let i = 0; i < 5; i++) {
      const boardByCellsNumber = boardByLines[i]
        .split(" ")
        .map((cell) => +cell);
      boardByCells.push(boardByCellsNumber);
    }
    boardsByCells.push(boardByCells);
  }
  return boardsByCells;
}

function getSumNumbersOfBoardsWithBingo(board: number[][]): number {
  let sum = 0;
  board.forEach((line) =>
    line.forEach((cell) => {
      if (cell !== -1) sum += cell;
    })
  );
  return sum;
}

function getBoardsWithBingo(boards: number[][][]): number {  
  return boards.filter(board=>board.length===0).length;
}

function playPartOne(input: string): number {
  const arrayInput = input.split("\n\n");
  const playNumbersArray = arrayInput[0].split(",");

  const boards = arrayInput.slice(1, arrayInput.length);
  let boardsByCells: number[][][] = getBoardsByCells(boards);
  let boardWithBingo = -1;

  let playNumbersIndex = 0;
  while (boardWithBingo === -1 && playNumbersIndex < playNumbersArray.length) {
    boardsByCells = searchAndChangeNumberInBoards(
      boardsByCells,
      +playNumbersArray[playNumbersIndex]
    );
    boardWithBingo = checkLineOrColumnComplet(boardsByCells);
    if (boardWithBingo === -1) playNumbersIndex++;
  }

  const lastNumber = playNumbersArray[playNumbersIndex];
  const sumNumbersOfBoardsWithBingo = getSumNumbersOfBoardsWithBingo(
    boardsByCells[boardWithBingo]
  );
  return +lastNumber * sumNumbersOfBoardsWithBingo;
}

function playPartTwo(input: string): number {
  const arrayInput = input.split("\n\n");
  const playNumbersArray = arrayInput[0].split(",");
  //const playNumbersArray=[83,5,71,61,88,55,95,6,0,97,20,16,27,7,79,25,81,29,22,52,43,21,53,59,99,18,35,96,51,93,14,77,15,3,57,28,58,17,50,32,74,63,76,84,65,9,62,67,48,12,8,68,31,19,36,85,98,30,91,89,66,80,75,47,4,23,60,70,87,90,13,38,56,34,46,24,41,92,37,49,73,10,94,26,42,40,33];

  const boards = arrayInput.slice(1, arrayInput.length);

  let boardsByCells: number[][][] = getBoardsByCells(boards);
  let playNumbersIndex = 0;
  let countBoardsWithBingo = 0;
  let boardWithBingo = -1;
  let test=0;
  while (
    countBoardsWithBingo < boardsByCells.length - 1 &&
    playNumbersIndex < playNumbersArray.length
  ) {
    boardWithBingo = -1;
    while (
      boardWithBingo === -1 &&
      playNumbersIndex < playNumbersArray.length
    ) {
      boardsByCells = searchAndChangeNumberInBoards(
        boardsByCells,
        +playNumbersArray[playNumbersIndex]
      );
      boardWithBingo = checkLineOrColumnComplet(boardsByCells);
      if (boardWithBingo !== -1){      
        boardsByCells[boardWithBingo] = [];
      } 
      playNumbersIndex++;
    }    
    countBoardsWithBingo = getBoardsWithBingo(boardsByCells);
  }

  boardsByCells = searchAndChangeNumberInBoards(
    boardsByCells,
    +playNumbersArray[playNumbersIndex]
  );

  boardsByCells.forEach((board,index)=>{
    console.log(index,board);
    
  })

  const indexLastBoard=boardsByCells.findIndex(board=>board.length!==0);
  
  const lastNumber = playNumbersArray[playNumbersIndex];
  const sumNumbersOfLastBoard = getSumNumbersOfBoardsWithBingo(
    boardsByCells[indexLastBoard]
  );
  return +lastNumber * sumNumbersOfLastBoard;
}

console.time("play");
console.log(playPartTwo(realInput));
console.timeEnd("play");
