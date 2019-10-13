const map = Array.prototype.map;

const vowelCounter = (str) => {
    const arrstring = map.call(str, eachLetter => {
        return `${eachLetter}`
    })

    let count = 0;

    arrstring.forEach(char => {
        if (char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o') {
            count += 1;
        }
        
    });
    return count;
}

console.log(vowelCounter('aioeoauiddegh'));