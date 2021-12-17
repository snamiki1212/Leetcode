function getRow(rowIndex: number): number[] {
  let pascal = []
  for(let i=0; i<rowIndex+1; i++) {
    pascal.push([])
    for(let j=0; j<i+1; j++) {
      pascal[i].push(-1)
    }
  }
  
  for(let i=0; i<pascal.length; i++) {
    for(let j=0; j<pascal[i].length; j++) {
      j==0 || j==pascal[i].length-1
        ? pascal[i][j] = 1
        : pascal[i][j] = pascal[i-1][j-1]+pascal[i-1][j]
    }
  }
  
  return pascal[pascal.length-1]
};