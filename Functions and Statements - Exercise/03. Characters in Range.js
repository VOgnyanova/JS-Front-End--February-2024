function charactersInRange(firstCharacter, secondCharacter) {

    let first = Math.min(firstCharacter.charCodeAt(0), secondCharacter.charCodeAt(0));
    let last = Math.max(firstCharacter.charCodeAt(0), secondCharacter.charCodeAt(0));
    let output = "";

    for (let i = first + 1; i < last; i++) {
        let currentSymbol = String.fromCharCode(i);
        output += `${currentSymbol} `;
    }
    console.log(output)
}


charactersInRange('#',
    ':');