
function solve(number) {
    const printRow = (num) => new Array(num).fill(num).join(' ');


    for (let i = 0; i < number; i++) {
        console.log(printRow(number));
    }


}

solve(7);