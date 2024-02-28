function slove(number, op1, op2, op3, op4, op5) {

    let result = number;
    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i < operations.length; i++) {

        let operation = operations[i];

        switch (operation) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result = result - result * 20 / 100;
                break;
        }

        console.log(result);

    }

}
slove('9', 'dice', 'spice', 'chop', 'bake', 'fillet');