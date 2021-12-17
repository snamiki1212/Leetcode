/**
 * @param {character[][]} grid
 * @return {number}
 */
const LAND = "1";
const WATER = "0";

var numIslands = function (grid) {
  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == LAND) {
        convertLandToWaterConnectingAdjacent(grid, i, j);
        counter++;
      }
    }
  }
  return counter;
};

const convertLandToWaterConnectingAdjacent = (grid, i, j) => {
  // guard
  if (!isInRange(grid, i, j)) return;

  // Center
  if (grid[i][j] == WATER) return;
  grid[i][j] = WATER;

  // Adjacents
  fn(grid, i, j - 1); // TOP
  fn(grid, i + 1, j); // RIGHT
  fn(grid, i - 1, j); // LEFT
  fn(grid, i, j + 1); // BOTTOM
};

const fn = convertLandToWaterConnectingAdjacent;

const isInRange = (grid, i, j) =>
  i >= 0 && i < grid.length && j >= 0 && j < grid[0]?.length;
