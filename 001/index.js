const remove_first_and_last = (str) => {
    if (str.length > 2) {
        return str.slice(1, str.length-1);
    }
    return null;
}

console.log(remove_first_and_last('somestring'));