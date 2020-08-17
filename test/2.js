function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const strArr = S.split("");

    const result = strArr.reduce((prev, current) => {
        if (prev.length === 0) return [current];
        return prev[prev.length - 1].indexOf(current) !== -1
            ? [...prev, current]
            : prev
                  .slice(0, prev.length - 1)
                  .concat([prev[prev.length - 1] + current]);
    }, []);
    return result.length;
}

console.log(solution("cycle"));
console.log(solution("abab"));
console.log(solution("dddd"));
