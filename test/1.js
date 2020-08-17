// 중복되는거 중에 가장 큰거
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    const arr = Array.from(new Set(S.split("")));
    const strArr = arr.sort((a, b) => {
        const _a = a.toLowerCase();
        const _b = b.toLowerCase();

        if (_a < _b) return 1;
        if (_a > _b) return -1;
        if (_a === _b && a < b) return -1;

        return 0;
    });
    const set = new Set();
    let result = null;

    for (let i in strArr) {
        if (!set.has(strArr[i].toLowerCase())) {
            set.add(strArr[i].toLowerCase());
        } else {
            result = strArr[i - 1];
            break;
        }
    }
    return result === null ? "NO" : result;
}
console.log(solution("Codility"));
