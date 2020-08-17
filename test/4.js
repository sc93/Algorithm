function solution(X, Y) {
    // write your code in JavaScript
    let numArr = [];
    for (let i = 1; i <= X; i++) {
        numArr.push(i.toString());
    }
    const nums = numArr.reduce((arr, b) => {
        return b.indexOf(Y.toString()) !== -1
            ? arr.concat(parseInt(b))
            : arr.concat();
    }, []);

    return nums.length === 0
        ? [0, 0, 0]
        : [
              nums.length,
              nums.reduce((a, b) => (a += b)),
              nums.reduce((a, b) => (a *= b)),
          ];
}

console.log(solution(5, 7));
