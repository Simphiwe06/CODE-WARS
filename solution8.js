function solution(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        let pair = str[i] + (str[i + 1] || '_'); // Add '_' if there's no second character
        result.push(pair);
    }
    return result;
}
