//returns diagonal difference of a square matrix
function diagonalDifference (matrix){
  let diagonal1 = 0, diagonal2 = 0;

  for (let row = 0; row < matrix.length; row++) {
      diagonal1 += matrix[row][row];
      diagonal2 += matrix[row][matrix.length - row - 1];
  }
  let difference = diagonal1 - diagonal2;
  return Math.abs(difference)
}
console.log(diagonalDifference([[1,2,7],[3,4,8],[5,6,9]]))