function slove(num1, num2) {
    let result = '';
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
        result += i + ' ';
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
slove(5, 10);
slove(0, 26);
slove(50,60);