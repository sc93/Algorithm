/*
    자연수 n이 매개변수로 주어집니다. 
    n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    let a = n;
    let b = 0;
    let str = '';
    while (true) {
        b = a % 3;
        a = Math.floor(a / 3);
        if (a === 0) {
            str += b.toString();
            break;
        } else {
            str += b.toString();
        }
    }
    return parseInt(str.split().join(''), 3);
}

console.log(solution(125));
console.log(solution(45));
console.log(solution(3));
console.log(solution(1));
// solution(1);
