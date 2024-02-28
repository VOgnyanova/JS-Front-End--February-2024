function slove(countOfStudents, typeOfGroup, dayType) {
    let singlePrice = 0;

    if (dayType === 'Friday') {
        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 8.45;
                break;
            case 'Business':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                break;

        }

    } else if (dayType === 'Saturday') {

        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 9.80;
                break;
            case 'Business':
                singlePrice = 15.60;
                break;
            case 'Regular':
                singlePrice = 20;
                break;

        }
    } else if (dayType === 'Sunday') {
        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Business':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.50;
                break;

        }

    }

    let totalPrice = singlePrice * countOfStudents;

    if (typeOfGroup === 'Students' && countOfStudents >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === 'Business' && countOfStudents >= 100) {
        totalPrice -= singlePrice * 10;
    } else if (typeOfGroup === 'Regular' && countOfStudents >= 10 && countOfStudents <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
slove(30,
    "Students",
    "Sunday")
slove(40,
    "Regular",
    "Saturday"
    );