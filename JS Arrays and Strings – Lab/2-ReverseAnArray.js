function solve(length, numbers) {
    let result = numbers
        .slice(0, length)
        .reverse()
        .join(' ');

    console.log(result);

}
solve(4, [-1, 20, 99, 5]);