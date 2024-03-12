function solve(numbers) {

    const sortedNumbers = numbers.sort((a,b) => a- b);
    const result = [];

    while (sortedNumbers.length > 0) {
        let firstNumer = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        result.push(firstNumer);
        if(lastNumber) {
            result.push(lastNumber);
        }
    }
    return result;

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);