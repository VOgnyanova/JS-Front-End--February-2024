function calc() {

    const firstInput = document.getElementById('num1');
    const secondtInput = document.getElementById('num2');
    const sumInput = document.querySelector('#sum');

    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondtInput.value);

    sumInput.value = firstNumber + secondNumber;

}
