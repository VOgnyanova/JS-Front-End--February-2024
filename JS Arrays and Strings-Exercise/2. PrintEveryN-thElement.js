function solve(array, step) {
    let resut = [];
    for (let i = 0; i < array.length; i += step) {
        resut.push(array[i]);

    }
return resut;

}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));