function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][arr.length - (i + 1)]
    }
    console.log(`primary: ${primary}`)
    console.log(`secondary: ${secondary}`)

    return `Difference: ${Math.abs(primary - secondary)}`;
}

const testArr = [
    [1, 2, 3, 44],
    [1, 7, 80, 4],
    [1, 1, 12, 4],
    [73, 2, 3, 16]
];

// arr[0][3]
// arr[1][2]
// arr[2][1]
// arr[3][0]
console.log(diagonalDifference(testArr));