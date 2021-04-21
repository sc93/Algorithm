function solution(n) {
    let count = 0;
    let result = n;
    while (result !== 0) {
        let num1 = 1;
        let num2 = 0;
        while (true) {
            num2 = num1 * num1;
            if (num2 > result) {
                result = result - (num1 - 1) * (num1 - 1);
                break;
            }
            num1++;
        }
        count++;
    }
    return count;
}
solution(41);
