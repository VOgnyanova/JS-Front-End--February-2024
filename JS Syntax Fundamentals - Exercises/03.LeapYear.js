function slove(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log('yes')
    } else {
        console.log('no');

    }
}
slove(1984);
slove(2003);
slove(4);
