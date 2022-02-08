import { uniqBy } from "lodash";

// 8 x 7
export const puzzle = [
  "......x",
  "......x",
  ".......",
  ".......",
  ".......",
  ".......",
  ".......",
  "xxxx...",
];
export const ROWS = puzzle.length;
export const COLS = puzzle[0].length;

// 10
const items = [
  ["x...", "xxxx"],
  ["x..", "xxx", "..x"],
  ["..xx", "xxx."],
  ["xxxx"],
  [".xx", "xxx"],
  ["xxx", "x.x"],
  ["x..", "xxx"],
  ["x..", "x..", "xxx"],
  ["x..", "xxx", "x.."],
  ["xx.", ".xx"],
];

const rotate = (item: string[]) => {
  const n = item.length;
  const m = item[0].length;
  const ret: any[] = [];
  for (let i = 0; i < m; ++i) {
    ret.push([]);
    for (let j = 0; j < n; ++j) {
      ret[i].push(item[j][m - i - 1]);
    }
  }
  return ret.map((v) => v.join(""));
};

const flip = (item: string[]) => {
  const n = item.length;
  const m = item[0].length;
  const ret: any[] = [];
  for (let i = 0; i < m; ++i) {
    ret.push([]);
    for (let j = 0; j < n; ++j) {
      ret[i].push(item[j][i]);
    }
  }
  return ret.map((v) => v.join(""));
};

// 10 * ? * ['???','???']
export const itemMasks = items.map((item) => {
  const ret = [item];
  // rotate
  for (let i = 1; i < 4; ++i) {
    ret.push(rotate(ret[i - 1]));
  }
  for (let i = 4; i < 8; ++i) {
    ret.push(flip(ret[i - 4]));
  }
  return uniqBy(ret, (x) => x.join("\n"));
});
// 10 * ?
export const firstXCols = itemMasks.map((masks) =>
  masks.map((mask) => mask[0].indexOf("x"))
);

export function solve(board: string[][]) {
  //console.log("board: " + board);
  const ret: { index: number; shapeRotation: number }[][] = [];
  const solution: ({ index: number; shapeRotation: number } | null)[] =
    items.map(() => null);
  let count = 0;

  const canPlace = (index: number, shape: number, shapeRotation: number) => {
    const row = Math.floor(index / COLS);
    const col = index % COLS;
    const mask = itemMasks[shape][shapeRotation];
    const n = mask.length;
    const m = mask[0].length;
    const firstXCol = firstXCols[shape][shapeRotation];
    if (row + n > ROWS) {
      return false;
    }
    if (col - firstXCol < 0 || col + m - firstXCol > COLS) {
      return false;
    }
    for (let r = 0; r < n; ++r) {
      for (let c = 0; c < m; ++c) {
        if (mask[r][c] === "x" && board[row + r][col + c - firstXCol] === "x") {
          return false;
        }
      }
    }
    return true;
  };

  const place = (index: number, shape: number, shapeRotation: number) => {
    const row = Math.floor(index / COLS);
    const col = index % COLS;
    const mask = itemMasks[shape][shapeRotation];
    const n = mask.length;
    const m = mask[0].length;
    const firstXCol = firstXCols[shape][shapeRotation];
    for (let r = 0; r < n; ++r) {
      for (let c = 0; c < m; ++c) {
        if (mask[r][c] === "x") {
          board[row + r][col + c - firstXCol] = "x";
        }
      }
    }
  };

  const remove = (index: number, shape: number, shapeRotation: number) => {
    const row = Math.floor(index / COLS);
    const col = index % COLS;
    const mask = itemMasks[shape][shapeRotation];
    const n = mask.length;
    const m = mask[0].length;
    const firstXCol = firstXCols[shape][shapeRotation];
    for (let r = 0; r < n; ++r) {
      for (let c = 0; c < m; ++c) {
        if (mask[r][c] === "x") {
          board[row + r][col + c - firstXCol] = ".";
        }
      }
    }
  };

  const findSolutions: any = (index: number) => {
    count += 1;
    if (ret.length > 100) {
      return false;
    }
    const row = Math.floor(index / COLS);
    const col = index % COLS;
    if (row >= ROWS) {
      //console.log("solution " + count + " is ");
      //console.log(solution);
      //why is this map different!? ********************************************
      //console.log(solution.map((s) => s));
      ret.push(solution.map((s) => s!));
      return true;
    }
    if (board[row][col] === "x") {
      return findSolutions(index + 1);
    }
    for (let shape = 0; shape < items.length; ++shape) {
      if (!solution[shape]) {
        for (
          let shapeRotation = 0;
          shapeRotation < itemMasks[shape].length;
          ++shapeRotation
        ) {
          if (canPlace(index, shape, shapeRotation)) {
            place(index, shape, shapeRotation);
            solution[shape] = { index, shapeRotation };
            findSolutions(index + 1);
            solution[shape] = null;
            remove(index, shape, shapeRotation);
          }
        }
      }
    }
    return false;
  };

  findSolutions(0);
  console.log(`Searches: ${count}`);
  return ret;
}
