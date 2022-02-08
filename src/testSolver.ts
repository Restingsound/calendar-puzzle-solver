import { solve, puzzle } from "./solver";

export function testSolver() {
  const buildBoard = (month: number, day: number, dayName: number) => {
    const board = puzzle.map((row: String) => row.split(""));
    board[Math.floor(month / 6)][month % 6] = "x";
    board[Math.floor((day - 1) / 7) + 2][(day - 1) % 7] = "x";
    if (dayName < 4) {
      board[6][3 + dayName] = "x";
    }
    board[7][dayName] = "x";
    return solve(board, 1);
  };

  let solutions = null;
  let solutionCount = 0;

  for (let m = 0; m < 12; m++) {
    for (let dw = 0; dw < 7; dw++) {
      for (let d = 1; d < 32; d++) {
        solutions = buildBoard(m, d, dw);

        if (solutions !== null) {
          solutionCount += 1;
          console.log("Solved");
        }
      }
    }
  }
  if (solutionCount === 2604) {
    console.log("Puzzle is Solveable");
  } else {
    console.log("Puzzle Doesn't Work");
  }

  return null;
}
