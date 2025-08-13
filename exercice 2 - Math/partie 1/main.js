// Matrices à multiplier
var A = [
    [1, 2, 3],
    [4, 5, 6],
];
var B = [
    [10, 11],
    [13, 14],
    [16, 17],
];
// Fonction pour multiplier deux matrices
function multiplyMatrices(matA, matB) {
    var rowsA = matA.length;
    var colsA = matA[0].length;
    var rowsB = matB.length;
    var colsB = matB[0].length;
    if (colsA !== rowsB) {
        console.error("Multiplication impossible : colonnes de A != lignes de B");
        return null;
    }
    var result = [];
    for (var i = 0; i < rowsA; i++) {
        result[i] = [];
        for (var j = 0; j < colsB; j++) {
            var sum = 0;
            for (var k = 0; k < colsA; k++) {
                sum += matA[i][k] * matB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
// Calcul
var C = multiplyMatrices(A, B);
if (C) {
    console.log("Résultat de la multiplication :");
    console.table(C);
}
