function solve(wordsInput, template) {
    const words = wordsInput.split(', ');
    let startIdex = -1;
    let endIndex = -1;

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '*') {
            if (startIdex < 0) {
                startIdex = i;
                endIndex = i + 1;

            }
            else {
                endIndex = i + 1;
            }
        } else {
            if (startIdex >= 0) {
                let length = endIndex - startIdex;
                let word = words.find(w => w.length === length);
                template = template.replace('*'.repeat(length), word);

                startIdex = -1;
                endIndex = -1;

            }
        }

    }
    if(startIdex >= 0){
        let length = endIndex - startIdex;
        let word = words.find(w=> w.length === length);

        template = template.replace('*'.repeat(length),word);
        startIdex =-1;
        endIndex =-1;
    }
    console.log(template);

}

solve('great',
    'softuni is ***** place for learning new programming languages'
);