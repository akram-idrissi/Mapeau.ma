function generateData(numPoints: number): { x: number; y: number }[] {
    const data: { x: number; y: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
        const x = i;
        const y = 2 * x + 3 + (Math.random() * 4 - 2);
        data.push({ x, y });
    }
    return data;
}

function linearRegression(data: { x: number; y: number }[]): { a: number; b: number } {
    const n = data.length;
    const sumX = data.reduce((acc, p) => acc + p.x, 0);
    const sumY = data.reduce((acc, p) => acc + p.y, 0);
    const sumXY = data.reduce((acc, p) => acc + p.x * p.y, 0);
    const sumX2 = data.reduce((acc, p) => acc + p.x * p.x, 0);

    // Formules
    const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - a * sumX) / n;

    return { a, b };
}

// Utilisation
const data = generateData(20);
const { a, b } = linearRegression(data);

console.log("Données (x, y) :", data);
console.log(`Régression linéaire: y = ${a.toFixed(2)}x + ${b.toFixed(2)}`);
