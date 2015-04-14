function calculateNullpoints(data) {
    var D = data.b * data.b - 4 * data.a * data.c;

    if (D < 0) {
        return {
            count: 0,
            solutions: []
        }
    }
    else if (D === 0) {
        return {
            count: 1,
            solutions: [ -data.b / (2 * data.a) ]
        }
    }
    else {
        return {
            count: 2,
            solutions: [ (-data.b + Math.sqrt(D)) / (2 * data.a), (-data.b - Math.sqrt(D)) / (2 * data.a)]
        }
    }
}

console.log(calculateNullpoints({
    a: 3,
    b: 1,
    c: 5
}));