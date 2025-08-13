const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const B = [
  [10, 11],
  [13, 14],
  [16, 17],
];

function multiplyMatrices(
  matA: number[][],
  matB: number[][]
): number[][] | null {
  const rowsA = matA.length;
  const colsA = matA[0].length;
  const rowsB = matB.length;
  const colsB = matB[0].length;

  if (colsA !== rowsB) {
    console.error("Multiplication impossible : colonnes de A != lignes de B");
    return null;
  }

  const result: number[][] = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matA[i][k] * matB[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

const C = multiplyMatrices(A, B);

if (C) {
  console.log("Résultat de la multiplication :");
  console.table(C);
}
