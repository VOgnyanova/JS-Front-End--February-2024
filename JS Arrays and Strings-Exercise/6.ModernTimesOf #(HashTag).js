function solve(input) {
    const pattern = /#(?<special_word>[a-zA-Z]+)/g;
    
    const matches = input.matchAll(pattern);
    for(const match of matches){
        console.log(match.groups['special_word']);
    }

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');