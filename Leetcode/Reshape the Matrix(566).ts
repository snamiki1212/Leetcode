function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (!canRehape(mat, r, c)) return mat;
  let output = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => -1)
  );
  let currR = 0,
    currC = 0;
  for (let i = 0; i < mat.length; i++) {
    const prevRow = mat[i];
    for (let j = 0; j < prevRow.length; j++) {
      const item = prevRow[j];

      output[currR][currC] = item;
      if (currC == c - 1) {
        currC = 0;
        currR = currR + 1;
      } else {
        currC = currC + 1;
      }
    }
  }

  return output;
}

const canRehape = (matrix, row, column) => {
  const prevRow = matrix.length;
  const prevColumn = matrix[0].length;
  return prevRow * prevColumn === row * column;
};
