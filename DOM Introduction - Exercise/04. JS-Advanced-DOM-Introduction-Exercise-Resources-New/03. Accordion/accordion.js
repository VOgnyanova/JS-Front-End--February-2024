function toggle() {

    const extraInforamtionElement = document.getElementById('extra');
    const toggleButtonElement = document.querySelector('.head span.button');


    const currentButtonText = toggleButtonElement.textContent;
    if (currentButtonText === 'More') {
        extraInforamtionElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraInforamtionElement.style.display= 'none';
        toggleButtonElement.textContent = 'More';
    }
}