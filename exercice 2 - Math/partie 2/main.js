function generateData(numPoints) {
    var data = [];
    for (var i = 0; i < numPoints; i++) {
        var x = i;
        var y = 2 * x + 3 + (Math.random() * 4 - 2);
        data.push({ x: x, y: y });
    }
    return data;
}
function linearRegression(data) {
    var n = data.length;
    var sumX = data.reduce(function (acc, p) { return acc + p.x; }, 0);
    var sumY = data.reduce(function (acc, p) { return acc + p.y; }, 0);
    var sumXY = data.reduce(function (acc, p) { return acc + p.x * p.y; }, 0);
    var sumX2 = data.reduce(function (acc, p) { return acc + p.x * p.x; }, 0);
    // Formules
    var a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var b = (sumY - a * sumX) / n;
    return { a: a, b: b };
}
// Utilisation
var data = generateData(20);
var _a = linearRegression(data), a = _a.a, b = _a.b;
console.log("Données (x, y) :", data);
console.log("R\u00E9gression lin\u00E9aire: y = ".concat(a.toFixed(2), "x + ").concat(b.toFixed(2)));
